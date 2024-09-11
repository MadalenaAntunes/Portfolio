import clientPromise from "../mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("MadsPortfolio");

    const skills = await db.collection("skills").find({}).toArray();

    res.status(200).json(skills);
  } catch (e) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
