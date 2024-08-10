import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signupInp } from "../zod";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      return c.status(403), c.json({ error: "user not found" });
    }

    const token = await sign(
      {
        userId: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.json({ token: token });
  } catch (e) {
    c.status(411);
    return c.text("Invalid");
  }
});

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const success=signupInp.safeParse(body);
  if(!success){
    c.status(403)
    return c.json({
        message:"Invalid inputs"
    })
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign(
      {
        userId: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      token: token,
      msg: "signed up",
    });
  } catch (e) {
    c.status(403);
    return c.text("inavlid user details");
  }
});
