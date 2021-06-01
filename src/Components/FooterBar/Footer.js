import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer-bar">
      <div className="footer-name">Igor Kalizhnikov, 2021</div>
      <div className="github">
        <div className="git-icon"></div>
        <div className="git-link">
          <a
            className="git-link"
            href="https://github.com/ElGuapo322"
            target="_blank"
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
}
