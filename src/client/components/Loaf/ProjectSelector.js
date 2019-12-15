import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks'

const ProjectOption = ({ project, onProjectSelection }) => (
  <div class="options" value={project._id} onClick={onProjectSelection}>
    {project.name} <span class="small">({project.path})</span>
  </div>
);

const ProjectSelector = ({projects, currentProject, onProjectSelection}) => {
  const [isSelecting, setSelecting] = useState(false)
  const projectSelectHandler = (event) => {
    setSelecting(false)
    onProjectSelection(event.target.value)
  };

  const projectOptions = projects.map(project => <ProjectOption project={project} onProjectSelection={projectSelectHandler} />)

  return (
    <div class="selector-holder">
      <div class="selector" onClick={() => setSelecting(!isSelecting)}>
        {currentProject? currentProject.name : "Not in a project"}
      </div>
      {isSelecting && <div class="selector-options">{projectOptions}</div>}
    </div>
  );
}

export default ProjectSelector;