import React, { useEffect, useState } from 'react';
import WeightageRow from './WeightageRow';

const AddWeightage = () => {
  const [weightageTable,setWeightageTable]= useState([]);

  const [refetch, setFetch] = useState(false);
  const[weightageName, setWeightageName]= useState('');


  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }


  useEffect(()=> {
    fetch('http://localhost:5000/weightage')
    .then(res=>res.json())
    .then(data=> setWeightageTable(data))
    .catch(err=>console.log(err))
  },[refetch])

  console.log(weightageTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(weightageName);
      
      
      fetch('http://localhost:5000/weightage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({weightageName: weightageName}),
        
      }).then(res=>res.json())
      .then(data=> setWeightageTable([...weightageTable, {_id: data.insertedId, weightageName: weightageName}]))
      .catch(err=>console.log(err));
    }

    return (
       <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Weightage</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="weightageName"
          required="weightage type required"
          value={weightageName}
          onChange={(e) => setWeightageName(e.target.value)} 
          placeholder="Weightage" className="input w-full max-w-xs" />
      
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
        <th>Weightage</th>
        <th>Action</th>
      
      </tr>
    </thead>
    <tbody>
     {
         weightageTable?.map((weightage, index) => 
  
               <WeightageRow
               key={index}
               weightage={weightage}
               index={index}
               refetch={handleFetch}
               />
         
          
         )
     }
      
    </tbody>
  </table>
</div>
       </div>
    );
};

export default AddWeightage;