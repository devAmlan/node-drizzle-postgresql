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
        friends:
          "5d7b45d3-9b1c-420e-ba57-f0126a072923,cf56581d-b943-4b1b-8399-91c0dea0165b",
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

addUser();
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
