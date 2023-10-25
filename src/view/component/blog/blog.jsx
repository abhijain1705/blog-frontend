import React from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";

function Blog(props) {
  function deleteTheBlog() {
    props.deleteThisBlog(props.id);
  }

  const navigate = useNavigate();

  function navigateToUpdatePage() {
    navigate(`/update/${props.id}`);
  }

  const url = `/blog/${props.id}`;
  return (
    <div className="blogCard">
      <a href={url}>
        <img alt="blog_image" src={props.image} />
      </a>
      <h1>{props.heading}</h1>
      <div className="metaContent">
        <a href={`/user/${props.userId}`}>Written by</a>
        <p>{props.date}</p>
      </div>
      {props.isSameUserProfile === true ? (
        <div className="buttonWrapper">
          <button onClick={navigateToUpdatePage} className="update">
            Update
          </button>
          <button onClick={deleteTheBlog} className="delete">
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Blog;
