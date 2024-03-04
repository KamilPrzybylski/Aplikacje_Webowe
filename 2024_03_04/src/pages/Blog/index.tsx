import Heading from "../../components/Heading"
// import {Post} from "../../types"
// import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import {usePosts} from "../../service/usePosts.ts";

function Blog() {
  /*
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json() as Promise<Post[]>)
      .then(json => {
        setPosts(json)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  },[])
   */

  const {data: posts, isLoading: loading, error} = usePosts()

  return (
    <div>
      <Heading title='Blog' level={1} />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {posts && posts.map(post => (
        <div key={post.id} style={{
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px 0'
        }}>
          <Heading level={2} title={post.title} />
          <Link to={'/blog/post/' + post.id}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Blog
