import { eventsStaticData } from "@/features/events/config/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(eventsStaticData);
}
