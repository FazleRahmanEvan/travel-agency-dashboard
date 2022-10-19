import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const InterestedCourse = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {year, setYear} = useState();

    return (
        <section>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly '>
            <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Course Level</option>
                     <option>IELTS</option>
                     <option>Speaking</option>
                     <option>Listening</option>
                     <option>Writting</option>
                     <option>Reading</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Intake Year:{year}</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Course Title"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:'Required'
                              }
                          })}
                      />
                      <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                         {errors.name.message} </span>}
                      {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-400">
                         {errors.name.message} </span>}
                          
                      </label>
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Intake Month</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>


            </div>
        </section>
    );
};

export default InterestedCourse;