import React, { useMemo } from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import classes from './Table.module.css';

/**
 * @name ExperinceTable
 * @description Experince Table
 * @returns Experince Table
 */
const ExperinceTable = ({ experinces }) => {
  const experinceArr = useMemo(() => experinces, [experinces]);
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
            {!!experinceArr.length && experinceArr.map((experince) => (
              <tr id={experince._id}>
                <td>
                  <p>
                    {experince._id}
                  </p>
                </td>
                <td>
                  <p>
                    {experince.company}
                  </p>
                </td>
                <td>
                  <p>
                    {experince.title}
                  </p>
                </td>
                <td>
                  <p>
                    {experince.startDate}
                  </p>
                </td>
                <td>
                  <p>
                    {experince?.endDate}
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

export default ExperinceTable;
