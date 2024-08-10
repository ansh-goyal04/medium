import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
    userId:string;
  }
}>();

blogRouter.use("/*", async (c, next) => {
  
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.status(402), c.json({ error: "invalid token" });
  }
  const token = authHeader.split(" ")[1];
  
  const user = await verify(token, c.env.JWT_SECRET);
  
  if(user) {  
    c.set("jwtPayload",user.userId);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }

//   await next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId=c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
try{
    const blog = await prisma.blog.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: authorId,
        },
      });
    
      return c.json({ id: blog.id });
}
catch(e){
    return c.text("error occured",)
}
  
});


// add pagination
blogRouter.get("/bulk", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      const blogs=await prisma.blog.findMany();

      return c.json({
        blogs
      })

})
 

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    return c.text("Couldn't find the blog");
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({ id: blog.id });
});

