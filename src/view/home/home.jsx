import React, { useState, useEffect } from "react";
import "./home.css";
import Cookies from "js-cookie";
import { blogAPI } from "../../api/blog";
import Blog from "../component/blog/blog";
import logo from "../../asset/logo.png";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [userid, setUserId] = useState("");

  useEffect(() => {
    blogAPI(setBlogData);
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");
    if (token !== undefined) {
      setUserId(userid);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <section>
      <div className="top">
        <div className="header">
          <img alt="logo" src={logo} />
          {isLoggedIn === true ? (
            <ul>
              <li>
                <a href={`/user/${userid}`}>Profile</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
          )}
        </div>

        <div className="title">
          <h4>BLOG</h4>
          <p>Your Daily Reads Here</p>
        </div>

        <div></div>
      </div>
      <h1 className="heading">Popular Reads</h1>
      <div className="middle">
        {blogData.map((itm) => {
          const date = new Date(itm.uploadDate).toLocaleString();
          return (
            <Blog
              image={itm.blogImage}
              heading={itm.h1}
              date={date}
              userId={itm.userId}
              id={itm._id}
              isSameUserProfile={false}
            />
          );
        })}
      </div>
      <div className="bottom">
        <p>Copyright @2023</p>
        <h3>Thank you for visiting us</h3>
        <ul>
          <li>
            <a href="/">Linkedin</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
