import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { db } from "@/lib/db";

// POST /api/admin/upload — upload image and optionally link to card
export async function POST(req: NextRequest) {
  try {
    let formData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json({ error: "Request must be multipart/form-data" }, { status: 400 });
    }

    const file = formData.get("file") as File | null;
    const cardId = formData.get("cardId") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPG, PNG, WebP, GIF" },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum 5MB" },
        { status: 400 }
      );
    }

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), "public", "ai-gallery");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Determine filename
    let filename: string;
    let url: string;

    if (cardId) {
      // If cardId provided, save with stable scene-XX.ext filename
      const card = await db.galleryCard.findUnique({
        where: { id: cardId },
      });

      if (card) {
        const ext = getExtension(file.type);
        filename = `${card.sceneId}.${ext}`;
        url = `/ai-gallery/${filename}`;

        // Delete old file if it exists with different extension
        const extensions = ["png", "jpg", "jpeg", "webp", "gif"];
        for (const oldExt of extensions) {
          if (oldExt !== ext) {
            const oldPath = path.join(uploadDir, `${card.sceneId}.${oldExt}`);
            if (existsSync(oldPath)) {
              try {
                const { unlink } = await import("fs/promises");
                await unlink(oldPath);
              } catch {
                // Ignore delete errors
              }
            }
          }
        }

        // Update card's image path in database
        await db.galleryCard.update({
          where: { id: cardId },
          data: { image: url },
        });
      } else {
        // Card not found, use UUID filename
        const ext = getExtension(file.type);
        const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        filename = `${uniqueName}.${ext}`;
        url = `/ai-gallery/${filename}`;
      }
    } else {
      // No cardId — generate unique filename
      const ext = getExtension(file.type);
      const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      filename = `${uniqueName}.${ext}`;
      url = `/ai-gallery/${filename}`;
    }

    // Write file to disk
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    return NextResponse.json({ url, filename });
  } catch (error) {
    console.error("POST /api/admin/upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}

function getExtension(mimeType: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
  };
  return map[mimeType] || "jpg";
}
