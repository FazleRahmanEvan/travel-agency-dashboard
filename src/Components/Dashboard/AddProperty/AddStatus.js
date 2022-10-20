import React, { useEffect, useState } from 'react';
import StatusRow from './StatusRow';

const AddStatus = () => {
  const [statusTable,setStatusTable]= useState([]);

  const[statusName, setStatusName]= useState('');

  useEffect(()=> {
    fetch('http://localhost:5000/status')
    .then(res=>res.json())
    .then(data=> setStatusTable(data))
    .catch(err=>console.log(err))
  },[])

  console.log(statusTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(statusName);
      
      
      fetch('http://localhost:5000/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({statusName: statusName}),
        
      }).then(res=>res.json())
      .then(data=> setStatusTable([...statusTable, {_id: data.insertedId, statusName: statusName}]))
      .catch(err=>console.log(err));
    }

    return (
       <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Status</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="statusName"
          required="status required"
          value={statusName}
          onChange={(e) => setStatusName(e.target.value)} 
          placeholder="Status" className="input w-full max-w-xs" />
      
        <div>
            
        <button className="btn btn-wide mt-3">Create</button>
        </div>
       
        </form>

        </div>
        
        <div className="overflow-x-auto ">
  <table className="table w-full ">
  
    <thead>
      <tr>
        <th>SL NO.</th>
        <th>Status</th>
        <th>Action</th>
      
      </tr>
    </thead>
    <tbody>
     {
         statusTable?.map((status, index) => 
  
               <StatusRow 
               key={index}
               status={status}
               index={index}
               />
         
          
         )
     }
      
    </tbody>
  </table>
</div>
       </div>
    );
};

export default AddStatus;