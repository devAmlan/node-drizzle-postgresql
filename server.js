import { db } from "./db.js";
import { User } from "./schema.js";
import { v4 as uuidv4 } from "uuid";
import express from "express";
import "dotenv/config";
import { eq } from "drizzle-orm";

const app = new express();

const PORT = process.env.PORT || 5000;

async function addUser() {
  try {
    const result = await db
      .insert(User)
      .values({
        id: uuidv4(),
        name: "Ninad sahoo",
      })
      .returning();
    console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
}

const getUser = async () => {
  try {
    const result = await db
      .select()
      .from(User)
      .where(eq(User.name, "Ninad sahoo"));

    return result;
  } catch (error) {
    console.log(error);
  }
};

app.get("/", async (req, res) => {
  const users = await getUser();

  res.send({ message: "Hello", userList: users });
});

app.post("/", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
