import { NextApiRequest, NextApiResponse } from "next";
import { blogPostSchema } from "../../../lib/schemas";
import blogPosts from "@/lib/data";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate all posts
    const validatedPosts = blogPosts.map(post => blogPostSchema.parse(post));
    res.status(200).json(validatedPosts);
  } catch (error) {
    res.status(500).json({ error: "Failed to validate blog posts" });
  }
}