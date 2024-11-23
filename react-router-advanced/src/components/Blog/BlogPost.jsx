import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  // useParams is used to access the dynamic route parameter
  const { id } = useParams();

  const blogPosts = {
    1: {
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    2: {
      title: "Understanding React Router",
      content: "React Router is a library for routing in React applications.",
    },
    3: {
      title: "Mastering React Query",
      content: "React Query is a powerful data-fetching library for React.",
    },
  };

  const post = blogPosts[id];

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
