import { eventsStaticData } from "@/features/events/config/data";
import { createResponse } from "../../utils/apiResponse";

export async function GET() {
  return createResponse(eventsStaticData, "Events retrieved successfully");
}
