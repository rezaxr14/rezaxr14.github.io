import React, {Suspense, lazy, useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {projectSection, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const ProjectCard = lazy(() =>
    import("../../components/projectCard/ProjectCard")
  );
  const renderLoader = () => <Loading />;
  const {isDark} = useContext(StyleContext);

  if (!projectSection.display) {
    return null;
  }
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="projects">
        <h1 className="project-title">{projectSection.title}</h1>
        <div className="repo-cards-div-main">
          {projectSection.projects.map((card, i) => {
            return <ProjectCard key={i} card={card} isDark={isDark} />;
          })}
        </div>
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
