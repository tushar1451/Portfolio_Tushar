import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text mb-10" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
      </Fade>
    </div>
  );
}
