import React from 'react';

const StudentTypeRow= ({index,student}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{student.studentName}</td>
          <td>Delete</td>
  </tr>
    );
};

export default StudentTypeRow;