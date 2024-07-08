import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, jwt } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
  const dbUrl = c.env.DATABASE_URL
  const prisma = new PrismaClient({
    datasourceUrl: dbUrl,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })

  const jwtKey = c.env.JWT_SECRET
  const token = await sign({ id: user.id }, jwtKey)

  return c.json({
    jwt: token
  })
})


app.post('/api/v1/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/v1/blog', (c) => {
  return c.text('post blog route')
})
app.put('/api/v1/blog', (c) => {
  return c.text('put blog route')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text(' get blog route')
})


export default app
