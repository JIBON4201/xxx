import { NextRequest, NextResponse } from "next/server";

// PUT /api/admin/cards/[id] — update card
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const { db } = await import("@/lib/db");
    const card = await db.galleryCard.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(card);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && (error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }
    console.error("PUT /api/admin/cards/[id] error:", error);
    return NextResponse.json({ error: "Database unavailable — card management requires local deployment" }, { status: 503 });
  }
}

// DELETE /api/admin/cards/[id] — delete card
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { db } = await import("@/lib/db");
    await db.galleryCard.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && (error as { code: string }).code === "P2025") {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }
    console.error("DELETE /api/admin/cards/[id] error:", error);
    return NextResponse.json({ error: "Database unavailable — card management requires local deployment" }, { status: 503 });
  }
}
