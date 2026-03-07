import { neon } from "@neondatabase/serverless";
import { BaseEnvironment } from "./BaseEnvironment";

let initialized = false;

export async function ensureDatabaseSchema() {
  if (initialized) return;
  const env = new BaseEnvironment();
  const sql = neon(env.DRIZZLE_DATABASE_URL!);
  await sql(`
    CREATE TABLE IF NOT EXISTS "courseList" (
      "id" serial PRIMARY KEY NOT NULL,
      "courseId" varchar NOT NULL,
      "name" varchar NOT NULL,
      "category" varchar NOT NULL,
      "level" varchar NOT NULL,
      "courseOutput" json NOT NULL,
      "isVideo" varchar NOT NULL DEFAULT 'Yes',
      "username" varchar,
      "userprofileimage" varchar,
      "createdBy" varchar,
      "courseBanner" varchar,
      "isPublished" boolean NOT NULL DEFAULT false
    );
  `);
  await sql(`
    CREATE TABLE IF NOT EXISTS "courseChapters" (
      "id" serial PRIMARY KEY NOT NULL,
      "courseId" varchar NOT NULL,
      "chapterId" integer NOT NULL,
      "content" json NOT NULL,
      "videoId" varchar NOT NULL
    );
  `);
  initialized = true;
}
