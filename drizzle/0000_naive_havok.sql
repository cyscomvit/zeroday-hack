CREATE TABLE "submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_name" varchar(150) NOT NULL,
	"team_lead" varchar(150) NOT NULL,
	"github_link" varchar(100) NOT NULL,
	"video_url" varchar(300) NOT NULL,
	"status" varchar(30) DEFAULT 'Not_Submitted' NOT NULL,
	"feedback" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
