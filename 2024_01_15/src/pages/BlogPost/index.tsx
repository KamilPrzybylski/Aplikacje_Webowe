import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "../../types";

export default function BlogPost() {
    const { id } = useParams<{id: string}>()

    const [post, setPost] = useState<Post | null>(null)
    const [loadingPost, setLoadingPost] = useState<boolean>(false)
    const [errorPost, setErrorPost] = useState<string | null>(null)

    useEffect(() => {
        setLoadingPost(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json() as Promise<Post>)
            .then((data) => {
                setPost(data)
            })
            .catch((error) => {
                setErrorPost(error.message)
            })
            .finally(() => {
                setLoadingPost(false)
            })
    }, [id])

    return (
        <div>
            {
                loadingPost ? (
                    <p>Loading...</p>
                )
                : errorPost || !post ? (
                    <p>{errorPost || 'Nieznany błąd'}</p>
                )
                : (
                    <div>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}