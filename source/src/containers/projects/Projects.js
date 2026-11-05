import React, {Suspense, lazy, useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {projectSection, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const ProjectCard = lazy(() =>
  import("../../components/projectCard/ProjectCard")
);

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!projectSection.display) {
    return null;
  }
  const upcoming = projectSection.inPreparation || [];
  return (
    <Suspense fallback={<Loading />}>
      <div className="main" id="projects">
        <h1 className="project-title">{projectSection.title}</h1>
        <div className="repo-cards-div-main">
          {projectSection.projects.map(card => (
            <ProjectCard key={card.name} card={card} isDark={isDark} />
          ))}
        </div>
        {upcoming.length > 0 && (
          <>
            <h2 className="project-subtitle">
              {projectSection.inPreparationTitle || "In preparation"}
            </h2>
            <div className="repo-cards-div-main project-inprep-list">
              {upcoming.map(card => (
                <ProjectCard
                  key={card.name}
                  card={{...card, inPreparation: true}}
                  isDark={isDark}
                />
              ))}
            </div>
          </>
        )}
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
