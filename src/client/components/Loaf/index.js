import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import api from "../../api";
import ProjectSelector from "./ProjectSelector";
import Breadcrumb from "./Breadcrumb";
import Slicedbread from "./Slicedbread";
import NpmContent from "../NpmContent";
import "./style.css";

const Loaf = () => {
  const [cwd, setCwd] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const fetchDirsSetCwd = async path => {
    const wd = await api.dirs(path);
    setCwd(wd);
  };

  const fetchProjects = async (wd = cwd) => {
    const projects = await api.getProjects();
    setProjects(projects);
    setCurrentProject(projects.find(project => project.path === wd.path));
  };

  const projectSelectHandler = id => {
    const projectToSelect = projects.find(project => project._id === id);
    setCurrentProject(projectToSelect);
    fetchDirsSetCwd(projectToSelect.path);
  };

  const projectCreateHandler = async (name, path) => {
    await fetchProjects();
  };

  useEffect(async () => {
    const wd = await api.dirs();
    setCwd(wd);
    fetchProjects(wd);
  }, []);

  useEffect(async () => {
    await fetchProjects();
  }, [cwd]);

  return cwd ? (
    <Fragment>
      <div class="breadhead">
        <ProjectSelector
          projects={projects}
          currentProject={currentProject}
          onProjectSelection={projectSelectHandler}
        />
        <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />
      </div>
      <div class="loaf-body">
        <NpmContent path={cwd.path} onProjectCreation={projectCreateHandler} />
        <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
      </div>
    </Fragment>
  ) : null;
};

export default Loaf;
