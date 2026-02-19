import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
});

export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(), // HTML content from Tiptap
  excerpt: text("excerpt"),
  image: text("image"),
  gallery: text("gallery", { mode: "json" }).$type<string[]>().default([]), // Array of image URLs
  category: text("category"),
  published: integer("published", { mode: "boolean" }).default(false),
  featured: integer("featured", { mode: "boolean" }).default(false),
  date: text("date").notNull(), // Store as ISO date string or display format
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
});

export const contactSettings = sqliteTable("contact_settings", {
  id: text("id").primaryKey(), // Singleton, e.g. "default"
  address: text("address").default(""),
  phone: text("phone").default(""),
  email: text("email").default(""),
  facebook: text("facebook").default(""),
  instagram: text("instagram").default(""),
  linkedin: text("linkedin").default(""),
  twitter: text("twitter").default(""),
  mapEmbedUrl: text("map_embed_url").default(""),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  hasRead: integer("has_read", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`),
});
