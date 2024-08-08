import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


// const app = new Hono()
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();

app.post('api/v1/user/signin',(c) =>{

  return c.text('hello signin');
});

app.post('api/v1/user/signup',async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body=await c.req.json();
await prisma.user.create({
  data:{
    email:body.email,
    password:body.password,
    name:body.name
  }
})

  return c.text('hello signup')
});

app.post('api/v1/blog',(c)=>{
  return c.text('hello blog');
});

app.get('api/v1/blog:id',(c)=>{
  return c.text('hello blog id');
});

app.put('api/v1/blog',(c)=>{
  return c.text('hello put blog');
})

app.get('api/v1/blog/bulk',(c)=>{
  return c.text('hello blog bulk')
})
export default app
