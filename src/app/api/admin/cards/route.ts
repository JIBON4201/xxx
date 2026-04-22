import { NextResponse } from "next/server";
import { getStaticCardsAll } from "@/lib/gallery-data";

// GET /api/admin/cards — fetch all cards (including inactive)
// Falls back to static data if database is unavailable (e.g., Vercel)
export async function GET() {
  try {
    const { db } = await import("@/lib/db");
    const cards = await db.galleryCard.findMany({
      orderBy: { order: "asc" },
    });
    if (cards && cards.length > 0) {
      return NextResponse.json(cards);
    }
  } catch {
    // Database unavailable — use static fallback
  }

  return NextResponse.json(getStaticCardsAll());
}

// POST /api/admin/cards — create new card
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sceneId, title, tag, image, duration, views, icon, category, order, active } = body;

    if (!title || !image) {
      return NextResponse.json({ error: "title and image are required" }, { status: 400 });
    }

    const { db } = await import("@/lib/db");
    const maxOrder = await db.galleryCard.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });
    const nextOrder = order ?? (maxOrder ? maxOrder.order + 1 : 1);

    const card = await db.galleryCard.create({
      data: {
        sceneId: sceneId ?? `scene-${String(nextOrder).padStart(2, "0")}`,
        title,
        tag: tag ?? "AI Preview",
        image,
        duration: duration ?? "2:30",
        views: views ?? "10K",
        icon: icon ?? "Sparkles",
        category: category ?? "all",
        order: nextOrder,
        active: active ?? true,
      },
    });

    return NextResponse.json(card, { status: 201 });
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && (error as { code: string }).code === "P2002") {
      return NextResponse.json({ error: "sceneId already exists" }, { status: 409 });
    }
    console.error("POST /api/admin/cards error:", error);
    return NextResponse.json({ error: "Database unavailable — card management requires local deployment" }, { status: 503 });
  }
}
