/** @type { import("drizzle-kit").Config } */
import "dotenv/config";
export default {
  schema: "./schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
