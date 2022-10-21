import React, { useEffect, useState } from 'react';
import UniversityRow from './UniversityRow';

const AddUniversity = () => {
  const [universityTable,setUniversityTable]= useState([]);
  const [refetch, setFetch] = useState(false);
  const[universityName, setUniversityName]= useState('');
  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }


  useEffect(()=> {
    fetch('http://localhost:5000/university')
    .then(res=>res.json())
    .then(data=> setUniversityTable(data))
    .catch(err=>console.log(err))
  },[refetch])

  console.log(universityTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(universityName);
      
      
      fetch('http://localhost:5000/university', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({universityName:universityName}),
        
      }).then(res=>res.json())
      .then(data=> setUniversityTable([...universityTable, {_id: data.insertedId, universityName: universityName}]))
      .catch(err=>console.log(err));
    }
    return (
      <div>
      <div className='text-2xl text-center mb-8'>
         <h1>Create University</h1>
      

 <form onSubmit={handleSubmit} className='mt-6 '>
   
   <input  type="text"  
       name="universityName"
       required="university name required"
       value={universityName}
       onChange={(e) => setUniversityName(e.target.value)}
       placeholder="University" className="input w-full max-w-xs" />
   
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
     <th>University</th>
     <th>Edit</th>
     <th>Delete</th>
   </tr>
 </thead>
 <tbody>
  {
      universityTable?.map((versity, index) => 

            <UniversityRow
            key={index}
            versity={versity}
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

export default AddUniversity;