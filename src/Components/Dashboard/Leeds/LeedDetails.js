import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const LeedDetails = () => {
  const [data, setData]= useState([]);
  const { _id } = data;
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
  

    return (
      <div >
        <h1 className='text-3xl font-bold mb-4 pl-8'>Details</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3  p-24'>
   <label className='text-xl font-bold'>First Name : {data.firstname}</label>
   <label className='text-xl font-bold'>Last Name : {data.secondname}</label>
    </div>
   
    </div>
    );
};

export default LeedDetails;