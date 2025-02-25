import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { submissions } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const { teamName, teamLead, githubLink, videoUrl } = await request.json();
    if (!teamName || !teamLead || !githubLink || !videoUrl) {
      return NextResponse.json(
        { error: "You have not entered the required fields" },
        { status: 400 },
      );
    }
    const [NewSubmission] = await db
      .insert(submissions)
      .values({
        teamName,
        teamLead,
        githubLink,
        videoUrl,
        status: "pending",
      })
      .returning();
    return NextResponse.json(
      {
        message: "Your data is submitted Successfully",
        submission: NewSubmission,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit project" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const teamId = url.searchParams.get("teamId");

    if (teamId) {
      const submission = await db.query.submissions.findFirst({
        where: (submissions, { eq }) => eq(submissions.id, parseInt(teamId)),
      });

      if (!submission) {
        return NextResponse.json(
          { error: "Submission not found" },
          { status: 404 },
        );
      }

      return NextResponse.json(submission);
    }
    const allSubmissions = await db.query.submissions.findMany();
    return NextResponse.json(allSubmissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 },
    );
  }
}
