import { eventsStaticData } from "@/features/events/config/data";
import { createResponse } from "../../utils/apiResponse";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return createResponse(eventsStaticData, "Events retrieved successfully");
  }

  const event = eventsStaticData.find((event) => event.id === Number(id));

  if (!event) {
    return createResponse(null, "Event not found", "error");
  }

  return createResponse(event, "Event retrieved successfully");
}
