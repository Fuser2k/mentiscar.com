import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";
import { users } from "./schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const dbPath = process.env.NODE_ENV === "production" ? "/app/data/sqlite.db" : "sqlite.db";
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
export const db = drizzle(sqlite, { schema });

// Always create tables so build-time DB queries don't fail with "no such table"
function createTables() {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at INTEGER DEFAULT (CURRENT_TIMESTAMP)
    );

    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      content TEXT NOT NULL,
      excerpt TEXT,
      image TEXT,
      gallery TEXT DEFAULT '[]',
      category TEXT,
      published INTEGER DEFAULT 0,
      featured INTEGER DEFAULT 0,
      date TEXT NOT NULL,
      created_at INTEGER DEFAULT (CURRENT_TIMESTAMP),
      updated_at INTEGER DEFAULT (CURRENT_TIMESTAMP)
    );

    CREATE TABLE IF NOT EXISTS contact_settings (
      id TEXT PRIMARY KEY,
      address TEXT DEFAULT '',
      phone TEXT DEFAULT '',
      email TEXT DEFAULT '',
      facebook TEXT DEFAULT '',
      instagram TEXT DEFAULT '',
      linkedin TEXT DEFAULT '',
      twitter TEXT DEFAULT '',
      map_embed_url TEXT DEFAULT '',
      updated_at INTEGER DEFAULT (CURRENT_TIMESTAMP)
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      has_read INTEGER DEFAULT 0,
      created_at INTEGER DEFAULT (CURRENT_TIMESTAMP)
    );
  `);
}

// Seed admin user - only at runtime, not during build
function seedAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminEmail && adminPassword) {
    try {
      const existing = db.select().from(users).where(eq(users.email, adminEmail)).get();
      if (!existing) {
        const hashed = bcrypt.hashSync(adminPassword, 10);
        db.insert(users).values({
          id: uuidv4(),
          name: "Admin",
          email: adminEmail,
          password: hashed,
        }).run();
        console.log(`[DB] Admin user created: ${adminEmail}`);
      }
    } catch (e: unknown) {
      // Ignore UNIQUE constraint errors (can happen with concurrent build workers)
      if (e instanceof Error && !e.message.includes("UNIQUE")) throw e;
    }
  }
}

// Always create tables (build + runtime)
createTables();

// Only seed admin at runtime
if (process.env.NEXT_PHASE !== "phase-production-build") {
  seedAdmin();
}

