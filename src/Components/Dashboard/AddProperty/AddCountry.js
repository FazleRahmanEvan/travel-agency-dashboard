import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading';
import CountryRow from './CountryRow';


const AddCountry = ({countryTable,setCountryTable}) => {

  // const [countryTable,setCountryTable]= useState([]);

  const[countryName, setCountryName]= useState('');

  useEffect(()=> {
    fetch('http://localhost:5000/country')
    .then(res=>res.json())
    .then(data=> setCountryTable(data))
    .catch(err=>console.log(err))
  },[])

  console.log(countryTable)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(countryName);
      
      
      fetch('http://localhost:5000/country', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({countryName: countryName}),
        
      }).then(res=>res.json())
      .then(data=> setCountryTable([...countryTable, {_id: data.insertedId, countryName: countryName}]))
      .catch(err=>console.log(err));
    }

    return (
       <div>
         <div className='text-2xl text-center mb-8'>
            <h1>Create Country</h1>
         

    <form onSubmit={handleSubmit} className='mt-6 '>
      
      <input  type="text"  
          name="countryName"
          required="country required"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)} 
          placeholder="Country" className="input w-full max-w-xs" />
      
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
         countryTable?.map((country, index) => 
  
               <CountryRow 
               key={index}
               country={country}
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

export default AddCountry;