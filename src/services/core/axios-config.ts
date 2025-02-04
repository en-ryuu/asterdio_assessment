import axios from "axios";
const THREE_MINUTES = 3 * 60 * 1000;
const baseAuthURL = process.env.BACKEND_API_BASE_URL;

const httpClient = axios.create({
  baseURL: baseAuthURL,
  timeout: THREE_MINUTES,
});

export interface CommonResponse<T = unknown> {
  data: T;
  responseStatus: string;
  message: string;
}

export { httpClient };
