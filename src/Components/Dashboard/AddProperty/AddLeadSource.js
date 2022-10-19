import React, { useEffect, useState } from 'react';
import LeadSourceRow from './LeadSourceRow';

const AddLeadSource = () => {
  const [sourceTable,setSourceTable]= useState([]);

  const[addFormData, setAddFormData]= useState({

   leadSourceName:''
  })
  useEffect(()=>{
 
     
   
}, [sourceTable])

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
      const newLeadSource ={
       
          leadSourceName:addFormData.leadSourceName
        
      };
      
      console.log(newLeadSource)

      const newLeadSources =[...sourceTable,newLeadSource];
      console.log(newLeadSources)
      setSourceTable(newLeadSources)
  };
  <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Country</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="leadSourceName"
          required="lead source required"
          onChange={handleAddFormChange}
          placeholder="Lead Source" className="input w-full max-w-xs" />
      
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
        <th>Lead Source</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
         sourceTable.map((source, index) => 
  
               <LeadSourceRow 
               key={source._id}
               source={source}
               index={index}
               />
         
          
         )
     }
      
    </tbody>
  </table>
</div>
       </div>
    return (
      <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Lead Source</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="leadSourceName"
          required="lead source required"
          onChange={handleAddFormChange}
          placeholder="Lead Source" className="input w-full max-w-xs" />
      
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
        <th>Country</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
         sourceTable.map((c, index) => 
  
               <LeadSourceRow 
               key={c._id}
               c={c}
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

export default AddLeadSource;