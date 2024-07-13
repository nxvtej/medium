import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";


export interface Blog {

    "title": string,
    "content": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    // const [blog, setBlog] = useState<Blog | null>(null);
    // const [blogs, setBlogs] = useState<Blo.g[] | null>(null);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        )
            .then(response => {
                setBlog(response.data.post)
                setLoading(false)
            })
    }, [id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog>();
    // const [blog, setBlog] = useState<Blog | null>(null);
    // const [blogs, setBlogs] = useState<Blog[] | null>(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        )
            .then(response => {
                setBlogs(response.data.blogs)
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs
    }
}