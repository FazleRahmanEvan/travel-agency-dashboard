import React from 'react';

const StatusRow = ({index,status}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{status.countryName}</td>
          <td>Edit</td>
          <td>Delete</td>
  </tr>
    );
};

export default StatusRow;