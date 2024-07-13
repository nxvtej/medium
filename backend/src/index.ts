import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, jwt, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
  Variables: {
    userId: string;
    prisma: any;
  };
}>()

app.use("/api/*", cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
