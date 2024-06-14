import React, { useMemo, useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import Model from '../model/Model';
import classes from './Table.module.css';
import Common from '../../utils/Common';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/Constants';

/**
 * @name TechnologyTable
 * @description Technology Table
 * @returns Technology Table
 */
const TechnologyTable = ({ technologies, setTechnologies }) => {
  const [view, setView] = useState(false);
  const [mode, setMode] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const techArr = useMemo(() => technologies, [technologies]);
  const iconStyle = useMemo(() => ({ className: classes.reactIcon }), []);
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    setView(false);
  };

  const deleteTech = async (tech) => {
    const isVerified = await Common.verifyTokens();

    if (isVerified) {
      await HttpHelper(`${Constants.TECH_ROUTE}/${tech._id}`, 'DELETE')
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
        })
        .then(() => {
          setTechnologies(techArr.filter((oldTech) => oldTech._id !== tech._id));
          Common.showToast('Technology successfully deleted.', 'success');
        })
        .catch(() => {
          Common.showToast('There was an error deleteing technology. Please try again later.', 'error');
        });
    } else {
      navigate('/login');
      Common.showToast('Unauthorized access. Please Login', 'error');
    }
  };

  const openModel = (tech, newMode) => {
    setInputArr([]);

    const newInputArr = [];
    const name = {
      title: 'Name',
      name: 'name',
      value: ''
    };
    const image = {
      title: 'Image',
      name: 'image',
      value: ''
    };

    if (newMode !== 'add') {
      name.value = tech.name;
      image.value = tech.image;
    }

    newInputArr.push(name);
    newInputArr.push(image);

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
                <p>Name</p>
              </th>
              <th>
                <p>Image</p>
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
            {!!techArr.length && techArr.map((tech) => (
              <tr key={tech._id}>
                <td>
                  <p>
                    {tech._id}
                  </p>
                </td>
                <td>
                  <p>
                    {tech.name}
                  </p>
                </td>
                <td>
                  <p>
                    {tech.image}
                  </p>
                </td>
                <td>
                  <p>
                    <IconContext.Provider value={iconStyle}>
                      <button className={classes.iconBtn} type="button" onClick={() => openModel(tech, 'edit')}><FaPencilAlt /></button>
                    </IconContext.Provider>
                  </p>
                </td>
                <td>
                  <p>
                    <IconContext.Provider value={iconStyle}>
                      <button className={classes.iconBtn} type="button" onClick={() => deleteTech(tech)}><FaTrashAlt /></button>
                    </IconContext.Provider>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.addBtn} type="button" onClick={() => openModel({}, 'add')}>Add</button>
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

export default TechnologyTable;
