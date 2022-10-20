import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LeadSourceRow from './LeadSourceRow';

const AddLeadSource = () => {
  const [sourceTable,setSourceTable]= useState([]);

  const[sourceName, setSourceName]= useState('');

//   const [deleteItem, setDeleteItem] = useState(null);
// const [refetch]= useQuery()


  useEffect(()=> {
    fetch('http://localhost:5000/source')
    .then(res=>res.json())
    .then(data=> setSourceTable(data))
    .catch(err=>console.log(err))
  },[])

  console.log(sourceTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(sourceName);
      
      
      fetch('http://localhost:5000/source', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({sourceName:sourceName}),
        
      }).then(res=>res.json())
      .then(data=> setSourceTable([...sourceTable, {_id: data.insertedId, sourceName: sourceName}]))
      .catch(err=>console.log(err));
    }
    return (
      <div>
      <div className='text-2xl text-center mb-8'>
         <h1>Create Lead Source</h1>
      

 <form onSubmit={handleSubmit} className='mt-6 '>
   
   <input  type="text"  
       name="sourceName"
       required="source name required"
       value={sourceName}
       onChange={(e) => setSourceName(e.target.value)}
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
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
  {
      sourceTable?.map((source, index) => 

            <LeadSourceRow
            key={index}
            source={source}
            index={index}
            />
      )
  }
   
 </tbody>
</table>
{/* {
                deleteItem && <DeleteConfirm
                    deleteItem={deleteItem}
                    refetch={refetch}
                    setDeleteItem={setDeleteItem}
                ></DeleteConfirm>
            } */}
</div>
    </div>
    );
};

export default AddLeadSource;