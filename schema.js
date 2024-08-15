import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("user", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
});
