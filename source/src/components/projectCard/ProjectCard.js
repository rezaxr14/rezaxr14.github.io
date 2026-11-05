import React from "react";
import "./ProjectCard.scss";
import {Fade} from "react-reveal";

export default function ProjectCard({card, isDark}) {
  const stack = card.stack || [];
  const links = card.links || [];
  const classes = ["project-card-div"];
  if (isDark) classes.push("dark-card-mode");
  if (card.inPreparation) classes.push("project-card-inprep");

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={classes.join(" ")}>
        {card.image && (
          <div className="project-card-image-div">
            <img
              className="project-card-image"
              src={card.image}
              alt={card.name}
              loading="lazy"
            />
          </div>
        )}
        <div className="project-card-body">
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="repo-card-octicon"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-card-title">{card.name}</p>
          </div>
          <p className="repo-card-subtitle">{card.subtitle}</p>
          {stack.length > 0 && (
            <div className="project-card-stack">
              {stack.map(skill => (
                <span key={skill} className="project-stack-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}
          <div className="project-card-footer">
            {card.inPreparation && (
              <span className="project-inprep-tag">In preparation</span>
            )}
            {links.map(link => (
              <a
                key={link.name}
                className="project-link-tag"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
