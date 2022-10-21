import React, { useEffect, useState } from 'react';
import CourseLevelRow from './CourseLevelRow';

const AddCourseLevel = () => {
  
  const [courseTable,setCourseTable]= useState([]);
  const [refetch, setFetch] = useState(false);
  const[courseName, setCourseName]= useState('');

  useEffect(()=> {
    fetch('http://localhost:5000/course')
    .then(res=>res.json())
    .then(data=> setCourseTable(data))
    .catch(err=>console.log(err))
  },[refetch])

  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }

  console.log(courseTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(courseName);
      
      
      fetch('http://localhost:5000/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({courseName: courseName}),
        
      }).then(res=>res.json())
      .then(data=> setCourseTable([...courseTable, {_id: data.insertedId, courseName: courseName}]))
      .catch(err=>console.log(err));
    }

    return (
       <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Course</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="courseName"
          required="course required"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)} 
          placeholder="Course" className="input w-full max-w-xs" />
      
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
        <th>Course</th>
        <th>Action</th>
      
      </tr>
    </thead>
    <tbody>
     {
         courseTable?.map((course, index) => 
  
               <CourseLevelRow 
               key={index}
               course={course}
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

export default AddCourseLevel;