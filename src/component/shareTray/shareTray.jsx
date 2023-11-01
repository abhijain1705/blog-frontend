import React from "react";
import "./shareTray.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

function ShareTray() {
  return (
    <ul className="shareIcons">
      <li>
        <FacebookShareButton url="https://www.npmjs.com/package/react-share">
          <FacebookIcon size={20} round={true} />
        </FacebookShareButton>
      </li>
      <li>
        <TelegramShareButton url="https://www.npmjs.com/package/react-share">
          <TelegramIcon size={20} round={true} />
        </TelegramShareButton>
      </li>
      <li>
        <LinkedinShareButton url="https://www.npmjs.com/package/react-share">
          <LinkedinIcon size={20} round={true} />
        </LinkedinShareButton>
      </li>{" "}
      <li>
        <TwitterShareButton url="https://www.npmjs.com/package/react-share">
          <TwitterIcon size={20} round={true} />
        </TwitterShareButton>
      </li>
    </ul>
  );
}

export default ShareTray;
