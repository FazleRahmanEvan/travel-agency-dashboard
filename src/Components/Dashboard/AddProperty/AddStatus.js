import React, { useEffect, useState } from 'react';
import StatusRow from './StatusRow';

const AddStatus = () => {
  const [statusTable,setStatusTable]= useState([]);

    const[addFormData, setAddFormData]= useState({

     statusname:''
    })
    useEffect(()=>{
   
       
     
  }, [statusTable])

    const handleAddFormChange =(event)=>{
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        
        const newFormData= {...addFormData};
        newFormData[fieldName]= fieldValue
        
        setAddFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newStatus ={
         
            statusName:addFormData.statusName
          
        };
        
        console.log(newStatus)

        const newStatuses =[...statusTable,newStatus];
        console.log(newStatuses)
        setStatusTable(newStatuses)
    };
    

    return (
      <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Status</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="statusName"
          required="status name required"
          onChange={handleAddFormChange}
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
         statusTable.map((status, index) => 
  
               <StatusRow
               key={status._id}
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