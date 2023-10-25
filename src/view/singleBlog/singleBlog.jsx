import React, { useEffect, useState } from "react";
import { singleBlogAPI } from "../../api/blog";
import "./singleBlog.css";
import { newComment, getBlogSpecificComments } from "../../api/comment";
import CommentBox from "../component/comment/comment";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

function SingleBlog() {
  const params = useParams();
  console.log(params);

  const [blogData, setBlogData] = useState({});
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  function handleComment(event) {
    setComment(event.target.value);
  }

  function submit(event) {
    const commentTime = new Date();
    const commentUserName = Cookies.get("username");
    const token = Cookies.get("token");
    const commentUserId = Cookies.get("userid");

    if (
      commentUserId === undefined ||
      commentUserName === undefined ||
      token === undefined
    ) {
      toast("You Need to login first.");
      return;
    }
    event.preventDefault();
    newComment(
      params.id,
      commentTime,
      commentUserName,
      commentUserId,
      comment,
      toast,
      token,
      setAllComments
    );
  }

  useEffect(() => {
    singleBlogAPI(params.id, setBlogData);
    getBlogSpecificComments(params.id, setAllComments);
  }, []);

  return (
    <div className="singleBlogParent">
      <div className="blogHeader">
        <ToastContainer />
        <img alt="blog_image" src={blogData.blogImage} />
        <div className="blogMetaContent">
          <a href={`/user/${blogData.userId}`}>Visit Writer Profile</a>
          <p>{new Date(blogData.uploadDate).toLocaleString()}</p>

          <div>
            <FacebookShareButton
              className="icon"
              url={`https://blog-frontend-rho-swart.vercel.app/blog/${params.id}`}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="icon"
              url={`https://blog-frontend-rho-swart.vercel.app/blog/${params.id}`}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <RedditShareButton
              className="icon"
              url={`https://blog-frontend-rho-swart.vercel.app/blog/${params.id}`}
            >
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
            <TelegramShareButton
              className="icon"
              url={`https://blog-frontend-rho-swart.vercel.app/blog/${params.id}`}
            >
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </div>
        </div>
      </div>
      <h1>{blogData.h1}</h1>
      <p>{blogData.p1}</p>
      <h1>{blogData.h2}</h1>
      <p>{blogData.p2}</p>
      <h1>{blogData.h3}</h1>
      <p>{blogData.p3}</p>

      <div className="commentWrapper">
        <div className="newComment">
          <h3>Add a New Comment</h3>
          <form onSubmit={submit}>
            <input
              onChange={handleComment}
              value={comment}
              placeholder="Add a New Comment"
              type="text"
            />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="commentUI">
          {allComments.map((comment) => {
            return (
              <CommentBox
                blogId={params.id}
                setAllComments={setAllComments}
                comment={comment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
