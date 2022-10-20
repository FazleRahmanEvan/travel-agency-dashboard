import React from 'react';

const CountryRow = ({index, country}) => {
   
    return (
        <tr>
              <th>{index + 1}</th>
                <td>{country.countryName}</td>
                <td>Edit</td>
                <td>Delete</td>
        </tr>
    );
};

export default CountryRow;