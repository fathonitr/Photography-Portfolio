type BlogPost = {
    id: string;
    title: string;
    // add any other fields your API returns
  };
export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts: BlogPost[] = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }