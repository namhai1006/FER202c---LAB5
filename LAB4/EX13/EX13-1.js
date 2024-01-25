import React, { useEffect, useState } from "react";

const UserPosts = ({ userId }) => {
  // State to hold the list of posts
  const [posts, setPosts] = useState([]);

  // useEffect to fetch data when the component mounts and when userId prop changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>User Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
