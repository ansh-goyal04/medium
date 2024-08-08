import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


// const app = new Hono()
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();

app.use('api/v1/blog/*',async(c,next)=>{

  const authHeader=c.req.header("authorization");
  if(!authHeader || !(authHeader.startsWith("Bearer "))){
    return c.status(402),c.json({error:"invalid token"})
  }
 const token=authHeader.split(" ")[1];
  const decoded=await verify(token,c.env.JWT_SECRET);
if(decoded.userId){
  next();

}
else{
  c.status(403)
  return c.json({error:"unauthorized"})
}
  
  await next();
})
app.post('api/v1/user/signin',async(c) =>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body=await c.req.json();
const user=await prisma.user.findUnique({
  where:{
    email:body.email,
    password:body.password
  }
});

if(!user){
  return c.status(403),c.json({error:"user not found"})
}

const token=await sign({
  userId:user.id
},c.env.JWT_SECRET)

return c.json({token:token})

});

app.post('api/v1/user/signup',async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body=await c.req.json();
const user=await prisma.user.create({
  data:{
    email:body.email,
    password:body.password,
    name:body.name
  }
})
const token=await sign({
  userId:user.id
},c.env.JWT_SECRET)

  return c.json({token:token})
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
