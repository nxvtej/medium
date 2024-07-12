
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, jwt, verify } from 'hono/jwt'
import { userRouter } from './user'
import { createBlogInput, updateBlogInput } from '@nxvtej/medium-common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
    Variables: {
        userId: string;
        prisma: any;
    };
}>()



blogRouter.use('/*', async (c, next) => {

    const jwtToken = c.req.header("Authorization");
    if (!jwtToken) {
        c.status(401);
        return c.json({
            error: "Unauthorized"
        })
    }

    try {

        const jwtKey = c.env.JWT_SECRET
        const token = jwtToken.split(' ')[1];

        const payload = await verify(token, jwtKey);
        if (!payload) {
            c.status(403);
            c.json({
                error: "Unauthorized"
            })
        }

        // other wise its a valid user so set the id 
        // @ts-ignore
        c.set('userId', payload.id);


    } catch (e) {
        console.log(e);
    }
    await next()
})


blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    console.log('User ID from JWT:', userId);

    if (!userId) {
        c.status(411);
        return c.json({
            error: "User ID is missing from the request."
        });
    }

    const dbUrl = c.env.DATABASE_URL;
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);

    if (!success) {
        c.status(411);
        console.log("inside the createBlogInput node moduloe not working properly");
        return c.text("invalid createBloginput");
    }

    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate());

    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        console.log('Created Post ID:', post.id);

        return c.json({
            id: post.id
        });
    } catch (error) {
        console.error('Error creating post:', error);
        c.status(500);
        return c.json({
            error: "Internal server error while creating post."
        });
    }
});



blogRouter.put('/', async (c) => {
    console.log('put blog route')

    const userId = c.get('userId');
    const dbUrl = c.env.DATABASE_URL
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);

    if (!success) {
        c.status(411);
        console.log("inside the updateInput node moduloe not working properly");
        return c.text("invalid updateBlogInput");
    }

    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    });
    console.log(c.get('userId'));

    return c.json({
        id: post.id
    });


})


blogRouter.get("/bulk", async (c) => {
    const dbUrl = c.env.DATABASE_URL
    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany();
    console.log(blogs)
    return c.json(
        blogs
    )
})

blogRouter.get('/:id', async (c) => {
    console.log(' get blog route')

    const userId = c.get('userId');
    const dbUrl = c.env.DATABASE_URL
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate())


    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
        });
        console.log(c.get('userId'));

        return c.json({
            post
        });

    } catch (e) {
        c.status(411);
        c.json({
            message: "Error while finding post "
        })
    }

})



/*
blogRouter.get("/bulk", async (c) => {


    return c.text("hi there");
})
*/