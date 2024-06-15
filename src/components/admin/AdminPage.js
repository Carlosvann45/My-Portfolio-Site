import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExperinceTable from "../tables/ExperinceTable";
import ProjectTable from "../tables/ProjectTable";
import TechnologyTable from "../tables/TechnologyTable";
import HttpHelper from "../../utils/HttpHelper";
import Constants from "../../utils/Constants";
import Common from "../../utils/Common";
import classes from "./AdminPage.module.css";

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
  const navigate = useNavigate();

  const findTable = () => {
    if (isSelected === 1) {
      return (
        <ExperinceTable experinces={experinces} setExperinces={setExperinces} />
      );
    }
    if (isSelected === 2) {
      return <ProjectTable projects={projects} setProjects={setProjects} />;
    }

    return (
      <TechnologyTable
        technologies={technologies}
        setTechnologies={setTechnologies}
      />
    );
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const experinceArr = await HttpHelper(Constants.EXPERINCE_ROUTE, "GET");

        setExperinces(await experinceArr.json());

        const projectArr = await HttpHelper(Constants.PROJECT_ROUTE, "GET");

        setProjects(await projectArr.json());

        const techArr = await HttpHelper(Constants.TECH_ROUTE, "GET");

        setTechnologies(await techArr.json());
      } catch (err) {
        const isVerified = await Common.verifyTokens();

        if (isVerified) {
          window.location.reload(false);
        } else {
          navigate("/login");
          Common.showToast("Unauthorized access. Please Login", "error");
        }
      }
    };

    loadData();
  }, [navigate]);

  return (
    <div className={classes.adminPageContainer}>
      <div className={classes.tabContainer}>
        <button
          className={`${classes.tab} ${isSelected === 1 ? classes.tabSelected : ""}`}
          onClick={() => setIsSelected(1)}
          type="button"
        >
          <p>Experinces</p>
        </button>
        <button
          className={`${classes.tab} ${isSelected === 2 ? classes.tabSelected : ""}`}
          onClick={() => setIsSelected(2)}
          type="button"
        >
          <p>Projects</p>
        </button>
        <button
          className={`${classes.tab} ${isSelected === 3 ? classes.tabSelected : ""}`}
          onClick={() => setIsSelected(3)}
          type="button"
        >
          <p>Technologies</p>
        </button>
      </div>
      <div className={classes.tableContainer}>{findTable()}</div>
    </div>
  );
};

export default AdminPage;
