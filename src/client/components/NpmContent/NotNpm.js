import { h } from "preact";
import "./style.css";
import { useState, useEffect } from "preact/hooks";

const NotNpm = ({ path, onProjectCreation }) => {
  const [isCreating, setCreating] = useState(false);
  const [projectName, setProjectName] = useState("");
  const projectCreationHandler = () => {
    if (!isCreating) {
      setCreating(true);
    } else {
      onProjectCreation(projectName);
    }
  };
  const projectNameChangeHandler = event => {
    setProjectName(event.target.value);
  };

  useEffect(() => {
    const pathSplit = path.split("/");
    const potentialProjectName = pathSplit[pathSplit.length - 1];
    setProjectName(potentialProjectName);
  }, [path]);

  return (
    <div class="not-npm-container">
      {isCreating && (
        <input
          class="project-name-input"
          placeholder="Project Name"
          value={projectName}
          onChange={projectNameChangeHandler}
        />
      )}
      <button class="import-btn" onClick={projectCreationHandler}>
        Create Project
      </button>
    </div>
  );
};

export default NotNpm;
