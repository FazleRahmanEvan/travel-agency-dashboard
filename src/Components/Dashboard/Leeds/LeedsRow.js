import React from 'react';
import { Link } from 'react-router-dom';



const leedsRow = ({index, item, refetch}) => {
 
    const{ _id}= item;
   
    const handleDelete = id=>{
       
        fetch(`http://localhost:5000/leeds/${_id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                alert(`Leed is deleted.`)
                refetch();
            }
        })
       }
    return (
        <tr>
        <th>{index + 1}</th>
        <td><Link class="link link-hover" to= {`/dashboard/leeddetails/${_id}`}>{item.firstname}</Link></td>
        <td>{item.email}</td>
        <td>{item.ieltsPoint}</td>
        <td>{item.countryname}</td>
        <td>{item.phone}</td>
    
        
      <td> <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button></td>
    </tr>
    );
};

export default leedsRow;