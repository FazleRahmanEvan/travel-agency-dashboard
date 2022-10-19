import React from 'react';

const CourseLevelRow = ({index,course}) => {
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{course.courseName}</td>
          <td>Edit</td>
          <td>Delete</td>
  </tr>
    );
};

export default CourseLevelRow;