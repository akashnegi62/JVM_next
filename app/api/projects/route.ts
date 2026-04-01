import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ projects: [] });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "Project created", body });
}