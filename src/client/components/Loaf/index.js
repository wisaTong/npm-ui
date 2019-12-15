import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import api from '../../api';
import ProjectSelector from './ProjectSelector';
import Breadcrumb from './Breadcrumb';
import Slicedbread from './Slicedbread';
import NpmContent from '../NpmContent';
import './style.css';

const Loaf = () => {
  const [cwd, setCwd] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const fetchDirsSetCwd = async (path) => {
    const wd = await api.dirs(path);
    setCwd(wd);
  };

  const projectSelectHandler = (id) => {
    const projectToSelect = projects.find(project => project._id == id);
    setCurrentProject(projectToSelect);
    fetchDirsSetCwd(projectToSelect.path);
  }

  useEffect(async () => {
    const wd = await api.dirs();
    setCwd(wd);
    const projects = await api.getProjects();
    setProjects(projects);
    setCurrentProject(projects.find(project => project.path === wd.path));
   }, []);

  return cwd ? (
    <Fragment>
      <div class="breadhead">
        <Breadcrumb path={cwd.path} callback={fetchDirsSetCwd} />
        <ProjectSelector projects={projects} currentProject={currentProject} onProjectSelection={projectSelectHandler} />
      </div>
      <div class="loaf-body">
        <Slicedbread dirs={cwd.dirs} callback={fetchDirsSetCwd} />
        <NpmContent path={cwd.path} />
      </div>
    </Fragment>
  ) : null;
};

export default Loaf;
