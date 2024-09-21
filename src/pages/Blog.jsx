import blogConstants from "./blogConstants.jsx";
import "./Card.css"
import Fullblog from "./Fullblog.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Blog = () => {
  const navigate=useNavigate();
  const handleSubmit = (blog) =>{
  console.log("clicked");
  console.log(blog);
  navigate("/blogs/blog", {
    state: { blog }, // pass the blog object as state
  });
  }
  return (
    <>
     {console.log(blogConstants)}
   <div className="match-card-container">
      { 
     
      blogConstants.map((blog) => (
        <div key={blog.id} className= "match-card" >
          
          <img src ={blog.img} className='image' />
          <h2 className="disp">{blog.title}</h2>
          <p className="desc">{blog.description}</p>
          <p className="auth"><span>Author: </span>{blog.author}</p>
          <p className="date"><span>Date:</span> {blog.date}</p>
          <p className="categ"><span>Category:</span> {blog.category}</p>
          <p className="tags"><span>Tags: </span>{blog.tags.join(", ")}</p>
          <button onClick = {()=>handleSubmit(blog)}>Read full blog</button>
        
          </div>
          
      
      
      )
  )}
        </div>
    </>
  );
};

export default Blog;