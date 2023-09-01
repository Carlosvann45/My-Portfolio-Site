import React, { useMemo } from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import classes from './Table.module.css';

/**
 * @name ProjectTable
 * @description Project Table
 * @returns Project Table
 */
const ProjectTable = ({ projects }) => {
  const projecteArr = useMemo(() => projects, [projects]);
  const iconStyle = useMemo(() => ({ className: classes.reactIcon }), []);

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
            {!!projecteArr.length && projecteArr.map((project) => (
              <tr id={project._id}>
                <td>
                  <p>
                    {project._id}
                  </p>
                </td>
                <td>
                  <p>
                    {project.title}
                  </p>
                </td>
                <td>
                  <p>
                    {project.description}
                  </p>
                </td>
                <td>
                  <p>
                    {project.link}
                  </p>
                </td>
                <td>
                  <p>
                    <IconContext.Provider value={iconStyle}>
                      <button className={classes.iconBtn} type="button"><FaEye /></button>
                    </IconContext.Provider>
                  </p>
                </td>
                <td>
                  <p>
                    <IconContext.Provider value={iconStyle}>
                      <button className={classes.iconBtn} type="button"><FaPencilAlt /></button>
                    </IconContext.Provider>
                  </p>
                </td>
                <td>
                  <p>
                    <IconContext.Provider value={iconStyle}>
                      <button className={classes.iconBtn} type="button"><FaTrashAlt /></button>
                    </IconContext.Provider>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.addBtn} type="button">Add</button>
      </div>
    </div>
  );
};

export default ProjectTable;
