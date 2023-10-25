import React, { useState } from "react";
import { replyComment } from "../../../api/comment";
import "./comment.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function CommentBox(props) {
  const doWeNeedReply =
    props.comment.replyContent.length > 0 &&
    props.comment.replyUserName.length > 0
      ? false
      : true;

  const [reply, setReply] = useState("");

  function handleReply(event) {
    setReply(event.target.value);
  }

  function submit(event) {
    const replyTime = new Date();
    const replyUserName = Cookies.get("username");
    const token = Cookies.get("token");
    const replyUserId = Cookies.get("userid");
    event.preventDefault();
    replyComment(
      props.comment._id,
      replyTime,
      replyUserId,
      replyUserName,
      reply,
      toast,
      token,
      props.blogId,
      props.setAllComments
    );
  }

  return (
    <div className="commentBox">
      <div className="commentSection">
        <h2>{props.comment.commentContent}</h2>
        <a href="/">{props.comment.commentUserName}</a>
      </div>
      {doWeNeedReply === true ? (
        <form onSubmit={submit}>
          <input
            onChange={handleReply}
            value={reply}
            placeholder="Reply here"
            type="text"
          />
          <button type="submit">Post</button>
        </form>
      ) : (
        <div className="replySection">
          <h2>{props.comment.replyContent}</h2>
          <a href="/">{props.comment.replyUserName}</a>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
