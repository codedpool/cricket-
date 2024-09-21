// Update your Fullblog.jsx file to include the CSS classes
import React from "react";
import blogConstants from "./blogConstants";
import { useLocation } from "react-router-dom";
import "./Fullblog.css"; // Import the CSS file

function Fullblog() {
  const location = useLocation();
  const blog = location.state.blog;

  console.log(blog);
  return (
    <div className="fullblog-container">
      <img src={blog.img} className="fullblog-image" />
      <div className="fullblog-content">
        <h2 className="fullblog-title">{blog.title}</h2>
        <p className="fullblog-author">Author: {blog.author}</p>
        <p className="fullblog-description">Description: {blog.description}</p>
   
        <p className="fullblog-content">{blog.content}</p>
        <p className="fullblog-tags">Tags: {blog.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default Fullblog;