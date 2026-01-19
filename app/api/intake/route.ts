import { NextResponse } from "next/server";

type IntakeSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact?: string;
  insuranceCarrier?: string;
  insuranceMemberId?: string;
  coverageNotes?: string;
  supportFocus?: string;
  notes?: string;
};

export async function POST (request: Request)
{
  try {
    const submission = (await request.json()) as IntakeSubmission;

    if (!submission?.firstName || !submission?.lastName || !submission?.email || !submission?.phone) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    const appscriptUrl = process.env.APPSCRIPT_WEBAPP_URL;
    const appscriptToken = process.env.APPSCRIPT_WEBAPP_TOKEN;

    if (!appscriptUrl) {
      return NextResponse.json({ success: false, message: "Missing APPSCRIPT_WEBAPP_URL." }, { status: 500 });
    }

    if (!appscriptToken) {
      return NextResponse.json({ success: false, message: "Missing APPSCRIPT_WEBAPP_TOKEN." }, { status: 500 });
    }

    const appscriptPayload = {
      token: appscriptToken,
      firstName: submission.firstName,
      lastName: submission.lastName,
      phone: submission.phone,
      email: submission.email,
      preferredContact: submission.preferredContact || "",
      insuranceCarrier: submission.insuranceCarrier || "",
      insuranceMemberId: submission.insuranceMemberId || "",
      coverageNotes: submission.coverageNotes || "",
      supportFocus: submission.supportFocus || "",
      notes: submission.notes || "",
      source: "website-intake",
      website: "",
    };

    const appscriptResponse = await fetch(appscriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appscriptPayload),
    });

    const responseBody = await appscriptResponse.text();
    let responseJson: { ok?: boolean } | null = null;

    try {
      responseJson = JSON.parse(responseBody);
    } catch (parseError) {
      console.error("AppScript response was not JSON.", parseError);
    }

    if (!appscriptResponse.ok || responseJson?.ok === false || !responseJson) {
      console.error("AppScript intake failed.", {
        status: appscriptResponse.status,
        body: responseBody,
      });
      return NextResponse.json({ success: false, message: "Unable to process submission." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake submission error.", error);
    return NextResponse.json({ success: false, message: "Unable to process submission." }, { status: 500 });
  }
}
























