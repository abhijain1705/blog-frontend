import React, { useState, useEffect } from "react";
import "./profile.css";
import Blog from "../component/blog/blog";
import { useParams, useNavigate } from "react-router-dom";
import {
  newBlog,
  updateBlog,
  deleteBlog,
  fetchUserSpecificBlogs,
} from "../../api/profile";
import Cookies from "js-cookie";

function Profile() {
  const params = useParams();
  console.log(params);
  const [userBlogs, setUserBlogs] = useState([]);
  const navigate = useNavigate();
  const [isSameUserId, setIsSameUserId] = useState(false);

  function deleteThisBlog(blogId) {
    deleteBlog(blogId);
  }

  useEffect(() => {
    const userid = Cookies.get("userid");
    if (userid === undefined) {
      navigate("/");
    } else if (userid === params.id) {
      setIsSameUserId(true);
    }
    fetchUserSpecificBlogs(params.id, setUserBlogs);
  }, []);

  function navigateToWriteBlogPage() {
    navigate("/writenewblog");
  }

  return (
    <div>
      <div className="profileHeader">
        <h1>{isSameUserId === true ? "Your Writes" : "User Writes"}</h1>
        {isSameUserId === true ? (
          <button onClick={navigateToWriteBlogPage}>Write New Blog</button>
        ) : (
          <p></p>
        )}
      </div>

      <div className="blogCollection">
        {userBlogs.map((userBlog) => {
          const date = new Date(userBlog.uploadDate).toLocaleString();
          return (
            <Blog
              image={userBlog.blogImage}
              heading={userBlog.h1}
              deleteThisBlog={deleteThisBlog}
              date={date}
              isSameUserProfile={isSameUserId}
              userId={userBlog.userId}
              id={userBlog._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
