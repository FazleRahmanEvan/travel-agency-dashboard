import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalDetails = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
  
    
    return (
        <section>
             <div className='justify-start'>
                <h1 className='text-xl text-slate-700 mb-4 mt-5'>Edit Personal Details</h1>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly '>
         <div className="form-control w-full max-w-xs">
                        {/* <label className="label">
                            <span className="label-text">First Name</span>
                        </label> */}
                        <input type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required:{
                                    value: true.valueOf,
                                    message:'Name is Required'
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
                      
                        <input type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required:{
                                    value: true.valueOf,
                                    message:'Last Name is Required'
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
                     <option disabled selected>Select Student Type</option>
                     <option>Bsc</option>
                     <option>Msc</option>
                     <option>MBA</option>
                     <option>Phd</option>
                   
                     </select>
              
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Apply Country</option>
                     <option>Canada</option>
                     <option>Usa</option>
                     <option>UK</option>
                     <option>Australia</option>
                     <option>China</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Email"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:'Email'
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
                      
                      <input type="text"
                          placeholder="Origin Country"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:'Origin Country'
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
                      
                      <input type="text"
                          placeholder="Phone"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:'Phone is Required'
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
                      
                      <input type="text"
                          placeholder="Optional Phone"
                          className="input input-bordered w-full max-w-xs"
                      
                      />
                      <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                         {errors.name.message} </span>}
                      {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-400">
                         {errors.name.message} </span>}
                          
                      </label>
                  </div>
         </div>

        </section>
    );
};

export default PersonalDetails;