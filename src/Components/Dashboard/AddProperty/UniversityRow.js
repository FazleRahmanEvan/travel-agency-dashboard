import React from 'react';

const UniversityRow = ({index,versity, refetch}) => {
  const{ _id}= versity;
  const handleDelete = id=>{

   fetch(`http://localhost:5000/university/${_id}`,{
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
          <td>{versity.universityName}</td>
        
          <td><button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button></td>
  </tr>
    );
};

export default UniversityRow;