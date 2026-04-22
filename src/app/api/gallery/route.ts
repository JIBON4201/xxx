import { NextResponse } from "next/server";
import { getStaticCards } from "@/lib/gallery-data";

// GET /api/gallery — fetch all active cards, ordered
// Falls back to static data if database is unavailable (e.g., Vercel)
export async function GET() {
  try {
    // Try database first
    const { db } = await import("@/lib/db");
    const cards = await db.galleryCard.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    if (cards && cards.length > 0) {
      return NextResponse.json(cards);
    }
  } catch {
    // Database unavailable — use static fallback
  }

  // Fallback: return static data (works on Vercel without DB)
  return NextResponse.json(getStaticCards(true));
}
