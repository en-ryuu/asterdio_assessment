import { CommonResponse } from "@/services/core/axios-config";
import { NextResponse } from "next/server";

export function createResponse<T>(
  data: T,
  message = "Success",
  status = "success"
) {
  return NextResponse.json<CommonResponse<T>>({
    data,
    responseStatus: status,
    message,
  });
}
