import React, { useEffect, useState } from 'react';

import StudentTypeRow from './StudentTypeRow';


const AddStudenetType = () => {

  const [studentTable,setStudentTable]= useState([]);

  const [refetch, setFetch] = useState(false);

  const[studentName, setStudentName]= useState('');

  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }

  useEffect(()=> {
    fetch('http://localhost:5000/student')
    .then(res=>res.json())
    .then(data=> setStudentTable(data))
    .catch(err=>console.log(err))
  },[refetch])

  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(studentName);
      
      
      fetch('http://localhost:5000/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({studentName: studentName}),
        
      }).then(res=>res.json())
      .then(data=> setStudentTable([...studentTable, {_id: data.insertedId, studentName: studentName}]))
      .catch(err=>console.log(err));
    }
    return (
      <div>
      <div className='text-2xl text-center mb-8'>
         <h1>Create Student Type</h1>
      

 <form onSubmit={handleSubmit} className='mt-6 '>
   
   <input  type="text"  
       name="studentName"
       required="country required"
       value={studentName}
       onChange={(e) => setStudentName(e.target.value)} 
       placeholder="Student" className="input w-full max-w-xs" />
   
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
     <th>Student Type</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
  {
      studentTable?.map((student, index) => 

            <StudentTypeRow 
            key={index}
            student={student}
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

export default AddStudenetType;