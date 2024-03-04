import {useQuery} from "@tanstack/react-query";
import {Post} from "../types";

export const getPost = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

export const usePost = (id: string) => {
  return useQuery<Post>({queryKey: ['post', id], queryFn: () => getPost(id)});
}