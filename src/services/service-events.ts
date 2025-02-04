import { IEventData } from "@/features/events/types";
import { useQuery } from "@tanstack/react-query";
import { CommonResponse, httpClient } from "./core/axios-config";
import { api } from "./core/service-api";

const fetchEvents = () => {
  return httpClient.get<CommonResponse<IEventData[]>>(api.events.fetch);
};

export const useFetchEvents = () => {
  return useQuery({
    queryKey: [api.events.fetch],
    queryFn: fetchEvents,
    select: (data) => data?.data?.data || [],
  });
};

const fetchEventById = (id: string) => () => {
  return httpClient.get<CommonResponse<IEventData>>(api.events.fetch, {
    params: id,
  });
};

export const useFetchEventById = (id: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: [api.events.fetch],
    queryFn: fetchEventById(id),
    select: (data) => data?.data?.data || [],
  });
};
