// frontend/src/components/AddBlog.js
import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/blogs", { title, content, author })
      .then((response) => {
        console.log("Blog added:", response.data);
        setTitle("");
        setContent("");
        setAuthor("");
      })
      .catch((error) => {
        console.error("There was an error adding the blog!", error);
      });
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
