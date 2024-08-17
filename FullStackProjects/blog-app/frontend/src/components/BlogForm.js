import React, { useState } from "react";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Add New Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;
