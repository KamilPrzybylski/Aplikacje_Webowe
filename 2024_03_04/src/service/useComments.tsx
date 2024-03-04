import {useQuery} from "@tanstack/react-query";
import {Comment} from "../types/comment.ts";

export const getComments = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return await response.json();
}

export const useComments = (id: string) => {
    return useQuery<Comment[]>({queryKey: ['comment', id], queryFn: () => getComments(id)});
}