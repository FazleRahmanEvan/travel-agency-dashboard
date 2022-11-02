import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const LeedDetails = () => {
  const { _id } = useParams();
  // const { leedId } = useParams();
  const [data, setData]= useState({});

  useEffect(()=> {
    
    fetch(`http://localhost:5000/leeds/${_id}`,{
      method:'GET', 
      headers: { 
          'Content-Type': 'application/json'
        },
  })
  .then(res=>res.json())
  .then(data=> setData(data))
    .catch(err=>console.log(err))
  }) 

  // useEffect( () =>{
//   const url = `http://localhost:5000/leeds/${leedId}`;

//   fetch(url)
//   .then(res=> res.json())
//   .then(data => setData(data))
// },[])

    return (
      <div >
        <h1 className='text-3xl font-bold mb-4 pl-8'>Details</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  p-24'>
 
    <label className='text-xl font-bold bg-white text-center rounded-full p-1'>First Name : <span className=''>{data.firstname}</span></label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Last Name : {data.secondname}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Email: {data.email}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Select Student Type : {data.studentame}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Apply Country: {data.countryname}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Origin Country: {data.originCountrys}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Phone: {data.phone}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Optional Phone: {data.optionalPhone}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Course Level: {data.coursename}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Course Intake Year: {data.courseIntakeYear}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Course Title : {data.courseTitle}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Course Intake Month: {data.courseIntakeMonth}</label>
   
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Previous Qualification Level: {data.previousQualificationLevel}</label>
   
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Recent Qualification Level: {data.recentQualificationLevel}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Previous Qualification : {data.previousQualification}</label>
   
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Recent Qualification Title: {data.recentQualification}</label>
{/*    
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Work Experience:  {data.workExperience}</label> */}
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Study Gap: {data.studyGap}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>IELTS: {data.ielts}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>IELTS Result: {data.ieltsResult}</label>
   
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>First Choice: {data.courseFirstChoice}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Second Choice: {data.courseSecondChoice}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Third Choice: {data.courseThirdChoice}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Fourth Choice: {data.courseFourthChoice}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Status: {data.statusname}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Lead Source: {data.sourcename}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Status Description: {data.statusDescription}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Lead Source Description: {data.leadSourceDescription}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Weightage: {data.weightagename}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Assigned Person: {data.assignedPerson}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Task Subject: {data.taskSubject}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Task Contact: {data.taskContact}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Course Name: {data.courseName}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Tuiton Fees: {data.tuitonFee}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>University: {data.university}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Application Status: {data.applicationStatus}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Application Intake Month: {data.applicationIntakeMonth}</label>
   <label className='text-xl font-bold bg-white text-center rounded-full  p-1'>Application Intake Year : {data.applicationIntakeYear}</label>
   
    </div>
   
    </div>
    );
};

export default LeedDetails;