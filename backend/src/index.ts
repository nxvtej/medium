import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', (c) => {
  const dbUrl = c.env.DATABASE_URL,
  const prisma = new PrismaClient({
    datasourceUrl: dbUrl,
  }).$extends(withAccelerate())
  return c.text('signup route')
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
