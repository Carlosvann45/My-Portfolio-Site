import React, { useMemo, useState } from "react";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Model from "../model/Model";
import HttpHelper from "../../utils/HttpHelper";
import Common from "../../utils/Common";
import Constants from "../../utils/Constants";
import classes from "./Table.module.css";

/**
 * @name ProjectTable
 * @description Project Table
 * @returns Project Table
 */
const ProjectTable = ({ projects, setProjects }) => {
  const [view, setView] = useState(false);
  const [mode, setMode] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const projecteArr = useMemo(() => projects, [projects]);
  const iconStyle = useMemo(() => ({ className: classes.reactIcon }), []);
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    setView(false);
  };

  const deleteProject = async (project) => {
    const isVerified = await Common.verifyTokens();

    if (isVerified) {
      await HttpHelper(`${Constants.PROJECT_ROUTE}/${project._id}`, "DELETE")
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
        })
        .then(() => {
          setProjects(
            projecteArr.filter((oldProject) => oldProject._id !== project._id),
          );
          Common.showToast("Project successfully deleted.", "success");
        })
        .catch(() => {
          Common.showToast(
            "There was an error deleteing project. Please try again later.",
            "error",
          );
        });
    } else {
      navigate("/login");
      Common.showToast("Unauthorized access. Please Login", "error");
    }
  };

  const openModel = (project, newMode) => {
    setInputArr([]);

    const newInputArr = [];
    const title = {
      title: "Title",
      name: "title",
      value: "",
    };
    const description = {
      title: "Description",
      name: "description",
      value: "",
    };
    const link = {
      title: "Link",
      name: "link",
      value: "",
    };
    const images = {
      title: "Images",
      name: "images",
      value: "",
    };

    if (newMode !== "add") {
      title.value = project.title;
      description.value = project.description;
      link.value = project.link;
      images.value = project.images;
    }

    switch (newMode) {
      case "add":
      case "edit":
        newInputArr.push(title);
        newInputArr.push(description);
        newInputArr.push(link);
        newInputArr.push(images);
        break;
      case "view":
        newInputArr.push(images);
        break;
      default:
        break;
    }

    setInputArr(newInputArr);
    setMode(newMode);
    setView(true);
  };

  return (
    <div className={classes.tableContainer}>
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>
                <p>ID</p>
              </th>
              <th>
                <p>Title</p>
              </th>
              <th>
                <p>Description</p>
              </th>
              <th>
                <p>Link</p>
              </th>
              <th>
                <p>Images</p>
              </th>
              <th>
                <p />
              </th>
              <th>
                <p />
              </th>
            </tr>
          </thead>
          <tbody>
            {!!projecteArr.length &&
              projecteArr.map((project) => (
                <tr key={project._id}>
                  <td>
                    <p>{project._id}</p>
                  </td>
                  <td>
                    <p>{project.title}</p>
                  </td>
                  <td>
                    <p>{project.description}</p>
                  </td>
                  <td>
                    <p>{project.link}</p>
                  </td>
                  <td>
                    <p>
                      <IconContext.Provider value={iconStyle}>
                        <button
                          className={classes.iconBtn}
                          type="button"
                          onClick={() => openModel(project, "view")}
                        >
                          <FaEye />
                        </button>
                      </IconContext.Provider>
                    </p>
                  </td>
                  <td>
                    <p>
                      <IconContext.Provider value={iconStyle}>
                        <button
                          className={classes.iconBtn}
                          type="button"
                          onClick={() => openModel(project, "edit")}
                        >
                          <FaPencilAlt />
                        </button>
                      </IconContext.Provider>
                    </p>
                  </td>
                  <td>
                    <p>
                      <IconContext.Provider value={iconStyle}>
                        <button
                          className={classes.iconBtn}
                          type="button"
                          onClick={() => deleteProject(project)}
                        >
                          <FaTrashAlt />
                        </button>
                      </IconContext.Provider>
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={classes.btnContainer}>
        <button
          className={classes.addBtn}
          type="button"
          onClick={() => openModel({}, "add")}
        >
          Add
        </button>
      </div>
      <Model
        title="Experince"
        inputArr={inputArr}
        callback={submit}
        view={view}
        setView={setView}
        mode={mode}
      />
    </div>
  );
};

export default ProjectTable;
