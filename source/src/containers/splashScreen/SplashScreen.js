import React, {useContext} from "react";
import "./SplashScreen.css";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <svg
          className="splash-robot"
          viewBox="0 0 200 200"
          role="img"
          aria-label="Loading"
        >
          <g className="robot-float">
            <line
              x1="100"
              y1="30"
              x2="100"
              y2="52"
              stroke="#645beb"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              className="robot-antenna"
              cx="100"
              cy="24"
              r="8"
              fill="#f97316"
            />
            <rect x="32" y="82" width="14" height="34" rx="7" fill="#4b43c9" />
            <rect x="154" y="82" width="14" height="34" rx="7" fill="#4b43c9" />
            <rect
              x="44"
              y="52"
              width="112"
              height="86"
              rx="24"
              fill="#645beb"
            />
            <rect x="58" y="66" width="84" height="56" rx="16" fill="#1f1d4d" />
            <circle className="robot-eye" cx="82" cy="90" r="9" fill="#fff" />
            <circle className="robot-eye" cx="118" cy="90" r="9" fill="#fff" />
            <rect
              className="robot-bar"
              x="84"
              y="104"
              width="8"
              height="12"
              rx="4"
              fill="#2dd4bf"
            />
            <rect
              className="robot-bar robot-bar-2"
              x="96"
              y="104"
              width="8"
              height="12"
              rx="4"
              fill="#2dd4bf"
            />
            <rect
              className="robot-bar robot-bar-3"
              x="108"
              y="104"
              width="8"
              height="12"
              rx="4"
              fill="#2dd4bf"
            />
            <rect
              x="70"
              y="144"
              width="60"
              height="30"
              rx="12"
              fill="#4b43c9"
            />
            <circle cx="88" cy="159" r="5" fill="#2dd4bf" />
            <circle cx="112" cy="159" r="5" fill="#f97316" />
          </g>
          <ellipse
            className="robot-shadow"
            cx="100"
            cy="188"
            rx="40"
            ry="5"
            fill="#000"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
