import { NextResponse } from "next/server";

export async function POST (request: Request)
{
  try {
    const submission = await request.json();

    if (!submission?.firstName || !submission?.lastName || !submission?.email || !submission?.phone) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    console.log("New intake submission", submission);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Unable to process submission." }, { status: 500 });
  } 
}
























