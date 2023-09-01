import React, { useEffect, useState } from 'react';
import ExperinceTable from '../tables/ExperinceTable';
import ProjectTable from '../tables/ProjectTable';
import TechnologyTable from '../tables/TechnologyTable';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/Constants';
import classes from './AdminPage.module.css';

/**
 * @name AdminPage
 * @description Admin page
 * @returns Admin Page
 */
const AdminPage = () => {
  const [isSelected, setIsSelected] = useState(1);
  const [experinces, setExperinces] = useState([]);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const findTable = () => {
    if (isSelected === 1) {
      return <ExperinceTable experinces={experinces} />;
    } if (isSelected === 2) {
      return <ProjectTable projects={projects} />;
    }

    return <TechnologyTable technologies={technologies} />;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const experinceArr = await HttpHelper(Constants.EXPERINCE_ROUTE, 'GET');

        setExperinces(await experinceArr.json());

        const projectArr = await HttpHelper(Constants.PROJECT_ROUTE, 'GET');

        setProjects(await projectArr.json());

        const techArr = await HttpHelper(Constants.TECH_ROUTE, 'GET');

        setTechnologies(await techArr.json());
      } catch (err) {
        window.location.reload(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className={classes.adminPageContainer}>
      <div className={classes.tabContainer}>
        <button
          className={`${classes.tab} ${isSelected === 1 ? classes.tabSelected : ''}`}
          onClick={() => setIsSelected(1)}
          type="button"
        >
          <p>Experinces</p>
        </button>
        <button
          className={`${classes.tab} ${isSelected === 2 ? classes.tabSelected : ''}`}
          onClick={() => setIsSelected(2)}
          type="button"
        >
          <p>Projects</p>
        </button>
        <button
          className={`${classes.tab} ${isSelected === 3 ? classes.tabSelected : ''}`}
          onClick={() => setIsSelected(3)}
          type="button"
        >
          <p>Technologies</p>
        </button>
      </div>
      <div className={classes.tableContainer}>
        {findTable()}
      </div>
    </div>
  );
};

export default AdminPage;
