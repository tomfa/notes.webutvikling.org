import type { APIRoute } from "astro";
import { atomFeed } from "../utils/feed";

export const GET: APIRoute = (context) => atomFeed(context);
