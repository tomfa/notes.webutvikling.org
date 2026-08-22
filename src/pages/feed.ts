import type { APIRoute } from "astro";
import { rssFeed } from "../utils/feed";

export const GET: APIRoute = (context) => rssFeed(context);
