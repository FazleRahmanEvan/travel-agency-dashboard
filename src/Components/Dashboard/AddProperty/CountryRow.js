import React from 'react';

const CountryRow = ({index,c}) => {
   
    return (
        <tr>
              <th>{index + 1}</th>
                <td>{c.countryName}</td>
                <td>Edit</td>
                <td>Delete</td>
        </tr>
    );
};

export default CountryRow;