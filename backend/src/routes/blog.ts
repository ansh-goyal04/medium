import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.status(402), c.json({ error: "invalid token" });
  }
  const token = authHeader.split(" ")[1];
  const decoded = await verify(token, c.env.JWT_SECRET);
  if (decoded.userId) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }

  await next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog=await prisma.blog
});

blogRouter.get("/", (c) => {
  return c.text("hello blog id");
});

blogRouter.put("/", (c) => {
  return c.text("hello put blog");
});

blogRouter.get("/bulk", (c) => {
  return c.text("hello blog bulk");
});
