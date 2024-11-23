import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, isFetching, error, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 5000, // Data is fresh for 5 seconds
      cacheTime: 300000, // Data stays in cache for 5 minutes after becoming stale
      refetchOnWindowFocus: false, // Disable refetching when window gains focus
      keepPreviousData: true, // Keep old data while fetching new data
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating data...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
