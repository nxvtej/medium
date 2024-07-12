import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, jwt, verify } from 'hono/jwt'
import { signupInput, signinInput } from '@nxvtej/medium-common'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
    Variables: {
        userId: string;
        prisma: any;
    };
}>();



userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        console.log("inside the signup node moduloe not working properly");
        return c.text("invalid username");
    }
    const dbUrl = c.env.DATABASE_URL
    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate())



    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            },
        })

        const jwtKey = c.env.JWT_SECRET
        const token = await sign({ id: user.id }, jwtKey)

        return c.text(token)

    } catch (e) {
        c.status(411);
        console.log(e);
        return c.text("invalid");
    }

})


userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        console.log("inside the signin node moduloe not working properly");
        return c.text("invalid username");
    }
    const dbUrl = c.env.DATABASE_URL
    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate())


    try {

        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if (!user) {
            c.status(403);
            return c.json({
                error: "user not found"
            })
        }
        const jwtKey = c.env.JWT_SECRET
        const token = await sign({ id: user.id }, jwtKey);
        return c.text(token)
    }
    catch (e) {
        console.log(e);
        c.status(411);
        return c.text("user not found")

    }

})
