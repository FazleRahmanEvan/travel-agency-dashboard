import React from 'react';

const StatusRow = ({index,status}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{status.statusName}</td>
          <td>Delete</td>
  </tr>
    );
};

export default StatusRow;