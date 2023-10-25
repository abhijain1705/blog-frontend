import React, { useState, useEffect } from "react";
import "./write.css";
import { newBlog, updateBlog } from "../../api/profile";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { singleBlogAPI } from "../../api/blog";
import { useNavigate, useParams } from "react-router-dom";

function Write() {
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [heading3, setHeading3] = useState("");
  const [file, setFile] = useState(null);
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [para3, setPara3] = useState("");

  const [userOnUpdatePage, setUserOnUpdatePage] = useState(false);
  const [blogData, setBlogData] = useState({});

  const params = useParams();
  useEffect(() => {
    if (params.hasOwnProperty("id") === true) {
      setUserOnUpdatePage(true);
      singleBlogAPI(params.id, setBlogData);
    }
  }, []);

  useEffect(() => {
    if (params.hasOwnProperty("id") === true) {
      setHeading1(blogData.h1);
      setHeading2(blogData.h2);
      setHeading3(blogData.h1);
      setPara1(blogData.h2);
      setPara2(blogData.h2);
      setPara3(blogData.h2);
    }
  }, [blogData]);

  function pickImage() {
    const inputElement = document.getElementById("imagePicker");
    inputElement.click();
  }

  const navigate = useNavigate();
  function navigateToProfile() {
    const userId = Cookies.get("userid");
    navigate(`/user/${userId}`);
  }

  function saveNewBlog() {
    const userId = Cookies.get("userid");
    if (userOnUpdatePage === true) {
      updateBlog(
        params.id,
        toast,
        navigateToProfile,
        file,
        heading1,
        heading2,
        heading3,
        para1,
        para2,
        para3
      );
    } else {
      newBlog(
        file,
        heading1,
        heading2,
        heading3,
        para1,
        para2,
        para3,
        userId,
        toast,
        navigateToProfile
      );
    }
  }

  function submit(event) {
    event.preventDefault();
  }

  return (
    <div className="writArea">
      <ToastContainer />
      <div className="header">
        <h1>{userOnUpdatePage === true ? "Update Here" : "Write Here"}</h1>
        <button onClick={saveNewBlog}>
          {userOnUpdatePage === true ? "Update" : "Post"}
        </button>
      </div>
      <form onSubmit={submit}>
        <div className="chooseFile">
          <input
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
            type="file"
            id="imagePicker"
          />
          <button onClick={pickImage}>Choose Blog Image</button>
        </div>

        <div className="headingInput">
          <input
            value={heading1}
            onChange={(event) => {
              setHeading1(event.target.value);
            }}
            placeholder="Blog Title Goes Here..."
            type="text"
          />
        </div>
        <div className="paraInput">
          <textarea
            rows={30}
            cols={100}
            value={para1}
            onChange={(event) => {
              setPara1(event.target.value);
            }}
            placeholder="Blog Content Goes Here..."
          ></textarea>
        </div>
        <div className="headingInput">
          <input
            value={heading2}
            onChange={(event) => {
              setHeading2(event.target.value);
            }}
            placeholder="Blog Title Goes Here..."
            type="text"
          />
        </div>
        <div className="paraInput">
          <textarea
            placeholder="Blog Content Goes Here..."
            rows={30}
            cols={100}
            value={para2}
            onChange={(event) => {
              setPara2(event.target.value);
            }}
          ></textarea>
        </div>
        <div className="headingInput">
          <input
            value={heading3}
            onChange={(event) => {
              setHeading3(event.target.value);
            }}
            placeholder="Blog Title Goes Here..."
            type="text"
          />
        </div>
        <div className="paraInput">
          <textarea
            placeholder="Blog Content Goes Here..."
            value={para3}
            onChange={(event) => {
              setPara3(event.target.value);
            }}
            rows={30}
            cols={100}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Write;
