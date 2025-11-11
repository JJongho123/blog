import { getPublishedPosts } from "@/lib/notion";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const tag = searchParams.get("tag") || undefined;
  const sort = searchParams.get("sort") || undefined;
  const startCursor = searchParams.get("startCursor") || undefined;
  const pageSize = parseInt(searchParams.get("pageSize") || "2") || undefined;

  const response = await getPublishedPosts({
    tag,
    sort,
    startCursor,
    pageSize,
  });

  return NextResponse.json(response);
}
