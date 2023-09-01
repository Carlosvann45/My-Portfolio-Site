import React, { useMemo } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import classes from './Table.module.css';

/**
 * @name TechnologyTable
 * @description Technology Table
 * @returns Technology Table
 */
const TechnologyTable = ({ technologies }) => {
  const techArr = useMemo(() => technologies, [technologies]);
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
              <tr id={tech._id}>
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

export default TechnologyTable;
