import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";
export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  teamName: varchar("team_name", { length: 150 }).notNull(),
  teamLead: varchar("team_lead", { length: 150 }).notNull(),
  githubLink: varchar("github_link", { length: 100 }).notNull(),
  videoUrl: varchar("video_url", { length: 300 }).notNull(),
  status: varchar("status", { length: 30 }).notNull().default("Not_Submitted"),
  feedback: text("feedback"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
export type Submission = typeof submissions.$inferSelect;
export type NewSubmission = typeof submissions.$inferInsert;
