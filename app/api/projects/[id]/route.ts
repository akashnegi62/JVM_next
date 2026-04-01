import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ project: null });
}

export async function PUT(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "Updated", body });
}

export async function DELETE() {
  return NextResponse.json({ message: "Deleted" });
}