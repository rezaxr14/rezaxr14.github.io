import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
      <Fade bottom duration={1000}>
        <div className="what-i-do-div">
          {skillsSection.skills.map(item => (
            <div
              key={item.title}
              className={
                isDark ? "dark-card-mode what-i-do-card" : "what-i-do-card"
              }
            >
              <i className={item.icon + " what-i-do-icon"}></i>
              <h3 className="what-i-do-title">{item.title}</h3>
              <p className="what-i-do-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </Fade>
      {skillsSection.skillGroups && (
        <Fade bottom duration={1000}>
          <div className="skill-groups-div">
            {skillsSection.skillGroups.map(group => (
              <div
                key={group.title}
                className={
                  isDark
                    ? "dark-card-mode skill-group-item"
                    : "skill-group-item"
                }
              >
                <p className="skill-group-title">{group.title}</p>
                <ul className="skill-chip-list">
                  {group.items.map(item => (
                    <li key={item} className="skill-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
}
