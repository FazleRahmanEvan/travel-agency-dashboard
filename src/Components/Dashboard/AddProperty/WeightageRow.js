import React from 'react';

const WeightageRow = ({index,weightage, refetch}) => {
  const{ _id}= weightage;
  const handleDelete = id=>{

   fetch(`http://localhost:5000/weightage/${_id}`,{
       method:'DELETE',
       headers: {
           'Content-Type': 'application/json'
         },
   })
   .then(res =>res.json())
   .then(data => {
       if(data.deletedCount){
           // alert(`Country is deleted.`)
           refetch();
       }
   })
  }
    return (
        <tr>
        <th>{index + 1}</th>
          <td>{weightage.weightageName}</td>
          <td><button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button></td>
  </tr>
    );
};

export default WeightageRow;