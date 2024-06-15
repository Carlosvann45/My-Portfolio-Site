import React, { useMemo, useState } from "react";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Model from "../model/Model";
import classes from "./Table.module.css";
import Common from "../../utils/Common";
import HttpHelper from "../../utils/HttpHelper";
import Constants from "../../utils/Constants";

/**
 * @name ExperinceTable
 * @description Experince Table
 * @returns Experince Table
 */
const ExperinceTable = ({ experinces, setExperinces }) => {
  const [view, setView] = useState(false);
  const [mode, setMode] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const experinceArr = useMemo(() => experinces, [experinces]);
  const iconStyle = useMemo(() => ({ className: classes.reactIcon }), []);
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    setView(false);
  };

  const deleteExperience = async (experience) => {
    const isVerified = await Common.verifyTokens();

    if (isVerified) {
      await HttpHelper(
        `${Constants.EXPERINCE_ROUTE}/${experience._id}`,
        "DELETE",
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
        })
        .then(() => {
          setExperinces(
            experinceArr.filter(
              (oldExperience) => oldExperience._id !== experience._id,
            ),
          );
          Common.showToast("Experience successfully deleted.", "success");
        })
        .catch(() => {
          Common.showToast(
            "There was an error deleteing experience. Please try again later.",
            "error",
          );
        });
    } else {
      navigate("/login");
      Common.showToast("Unauthorized access. Please Login", "error");
    }
  };

  const openModel = (experince, newMode) => {
    setInputArr([]);

    const newInputArr = [];
    const company = {
      title: "Company",
      name: "company",
      value: "",
    };
    const title = {
      title: "Title",
      name: "title",
      value: "",
    };
    const startDate = {
      title: "Start Date",
      name: "startDate",
      value: "",
    };
    const endDate = {
      title: "End Date",
      name: "endDate",
      value: "",
    };
    const descriptions = {
      title: "Descriptions",
      name: "descriptions",
      value: "",
    };

    if (newMode !== "add") {
      company.value = experince.company;
      title.value = experince.title;
      startDate.value = experince.startDate;
      endDate.value = experince.title;
      descriptions.value = experince.descriptions;
    }

    switch (newMode) {
      case "add":
      case "edit":
        newInputArr.push(company);
        newInputArr.push(title);
        newInputArr.push(startDate);
        newInputArr.push(endDate);
        newInputArr.push(descriptions);
        break;
      case "view":
        newInputArr.push(descriptions);
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
                <p>Company</p>
              </th>
              <th>
                <p>Title</p>
              </th>
              <th>
                <p>Start Date</p>
              </th>
              <th>
                <p>End Date</p>
              </th>
              <th>
                <p>Descriptions</p>
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
            {!!experinceArr.length &&
              experinceArr.map((experince) => (
                <tr key={experince._id}>
                  <td>
                    <p>{experince._id}</p>
                  </td>
                  <td>
                    <p>{experince.company}</p>
                  </td>
                  <td>
                    <p>{experince.title}</p>
                  </td>
                  <td>
                    <p>{experince.startDate}</p>
                  </td>
                  <td>
                    <p>{experince?.endDate}</p>
                  </td>
                  <td>
                    <p>
                      <IconContext.Provider value={iconStyle}>
                        <button
                          className={classes.iconBtn}
                          type="button"
                          onClick={() => openModel(experince, "view")}
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
                          onClick={() => openModel(experince, "edit")}
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
                          onClick={() => deleteExperience(experince)}
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

export default ExperinceTable;
