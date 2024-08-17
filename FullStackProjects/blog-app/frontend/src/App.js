import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from the server
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new blog
  const addBlog = async (blog) => {
    try {
      await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      fetchBlogs(); // Reload blogs after adding
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1>Blog Platform</h1>
      <BlogForm addBlog={addBlog} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
}

export default App;
