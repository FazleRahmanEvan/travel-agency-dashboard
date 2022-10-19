import React from 'react';

const UniversityRow = ({index,versity}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{versity.universityName}</td>
          <td>Edit</td>
          <td>Delete</td>
  </tr>
    );
};

export default UniversityRow;