import React from 'react';

const StatusRow = ({index,status,refetch}) => {
  const{ _id}= status;
  const handleDelete = id=>{

   fetch(`http://localhost:5000/status/${_id}`,{
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
          <td>{status.statusName}</td>
          <td><button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button></td>
  </tr>
    );
};

export default StatusRow;