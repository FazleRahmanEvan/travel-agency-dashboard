import React from 'react';

const LeadSourceRow = ({index,source}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{source.sourceName}</td>
          <td>Delete</td>
  </tr>
    );
};

export default LeadSourceRow;