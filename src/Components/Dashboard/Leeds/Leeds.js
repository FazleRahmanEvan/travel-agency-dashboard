import React, { useEffect, useState } from 'react';
import LeedDetails from './LeedDetails';
import LeedsRow from './LeedsRow';

const Leeds = () => {
    const [data, setData]= useState([])
    const [refetch, setFetch] = useState(false);
  

    const handleFetch = () => {
        setFetch((prev)=>!prev)
      }
    
    useEffect(()=> {
        fetch('http://localhost:5000/leeds')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
      },[refetch])


    return (
        <div>
            <h1 className='text-3xl font-bold pl-4 mb-6 mt-5'>Leeds</h1>
            <p className='mt-6 pl-8'>Total Leeds: {data?.length}</p>
            <div class="overflow-x-auto mt-4">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>SL NO.</th>
        <th>Name</th>
        <th>Email</th>
        <th>IELTS</th>
        <th>Interested Country</th>
        <th>Phone</th>
        <th>Action</th>
     
      </tr>
    </thead>
    <tbody>
      
    {
        data?.map((item, index)=> (
         

            <LeedsRow 
            key={index}
            item={item}
            index={index}
            refetch={handleFetch}
            />
            
        ))
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Leeds;