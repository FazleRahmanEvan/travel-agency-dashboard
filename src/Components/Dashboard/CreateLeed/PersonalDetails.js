import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useCountry from "../../../hooks/useCountry";
import useStudentType from "../../../hooks/useStudentType";
import axios from 'axios'
const PersonalDetails = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loading, countries } = useCountry("country");
  // const { students} = useStudentType('student');

  const onSubmit = (data) => {
    // console.log(data);

       
    // fetch('http://localhost:5000/leeds', {
    // method: "POST",
    // headers: {
    //    'Content-type': 'application/json',
    //    'Accept': 'application/json'
    // },
    // body: JSON.stringify({data}),

    // })
    // .then(res=> res.json())
    // .then(data=>console.log(data))
   
    axios.post('http://localhost:5000/leeds', data).then(res=> console.log(res)).catch(err=> console.log(err))

  }

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <section>
      <div className="justify-start">
        <h1 className="text-xl text-slate-700 mb-4 mt-5">
          Edit Personal Details
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly ">
          <div className="form-control w-full max-w-xs">
            {/* <label className="label">
                            <span className="label-text">First Name</span>
                        </label> */}
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
              {...register("firstname", {
                required: {
                  // value: true.valueOf,
                  message: "Name is Required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
              {...register("lastname", {
                required: {
                  // value: true.valueOf,
                  message: "Last Name is Required",
                },
              })}
            />
          </div>

          {/*                    
                    <div className="form-control w-full max-w-xs">
                    <select name='studentName' className="select w-full max-w-xs">
                    <option disabled selected>Select Student Type</option>
                     {
                               students?.map((student,index) =><option 
                                key={index}
                                value={student.studentName}
                               >{student.studentName}</option>)
                           }
                   
                     </select>
              
                    </div> */}

          <div className="form-control w-full max-w-xs">
            <select
              {...register("countryName")}
              className="select w-full max-w-xs"
            >
              <option disabled selected>
                Apply Country
              </option>
              {countries?.map((country, index) => (
                <option key={index} value={country.countryName}>
                  {country.countryName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  //   value: true.valueOf,
                  message: "Email",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Origin Country"
              className="input input-bordered w-full max-w-xs"
              {...register("originCountry", {
                required: {
                  //   value: true.valueOf,
                  message: "Origin Country",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  //   value: true.valueOf,
                  message: "Phone is Required",
                },
              })}
            />
          </div>

          {/* <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Optional Phone"
                          className="input input-bordered w-full max-w-xs"
                      
                      />
                    
                  </div> */}
        </div>
        <div className="form-control w-full max-w-xs">
            <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs" />
        </div>


        <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' {...register('certificate')} className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>All Academic Certificate & Transcript</p>
    </div>
</div>

      </form>
    </section>
  );
};

export default PersonalDetails;
