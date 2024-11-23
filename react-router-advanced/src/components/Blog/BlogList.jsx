import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React",
    },
    { id: 2, title: "Understanding React Router" },
    { id: 3, title: "Mastering React Query" },
  ];

  return (
    <div>
      <h1>BlogPosts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            {/* this is the dynamic route link */}
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
