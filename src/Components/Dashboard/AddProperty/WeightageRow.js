import React from 'react';

const WeightageRow = ({index,weightage}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{weightage.weightageName}</td>
          <td>Delete</td>
  </tr>
    );
};

export default WeightageRow;