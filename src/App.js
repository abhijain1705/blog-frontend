import "./App.css";
import Login from "./view/login/login";
import Signup from "./view/signup/signup";
import Home from "./view/home/home";
import Profile from "./view/profile/profile";
import SingleBlog from "./view/singleBlog/singleBlog";
import { Routes, Route } from "react-router-dom";
import Write from "./view/write/write";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/update/:id" element={<Write />} />
        <Route path="/writenewblog" element={<Write />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
