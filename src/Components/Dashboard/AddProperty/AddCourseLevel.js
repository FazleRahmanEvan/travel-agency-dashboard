import React, { useEffect, useState } from 'react';
import CourseLevelRow from './CourseLevelRow';

const AddCourseLevel = () => {
  const [courseTable,setCourseTable]= useState([]);

  const[addFormData, setAddFormData]= useState({

   courseName:''
  })
  useEffect(()=>{
     fetch('')
     .then(res => res.json())
     .then(data => setCourseTable)
   
}, [courseTable])

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
        
      const newCourse ={
        
          courseName:addFormData.courseName
      
      };

      const newCourses =[...courseTable,newCourse];
      console.log(newCourses)
      setCourseTable(newCourses)
  };
  
    return (
      <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Country</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="courseName"
          required="course required"
          onChange={handleAddFormChange}
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
         courseTable.map((course, index) => 
  
               <CourseLevelRow
               key={course._id}
               course={course}
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

export default AddCourseLevel;