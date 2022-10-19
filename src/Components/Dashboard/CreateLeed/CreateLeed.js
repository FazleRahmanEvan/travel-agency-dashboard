import React from 'react';
import { useForm } from 'react-hook-form';
import Application from './Application';

import CreateTask from './CreateTask';
import EnglishTest from './EnglishTest';
import InstitutionChoice from './InstitutionChoice';
import InterestedCourse from './InterestedCourse';
import PersonalDetails from './PersonalDetails';
import PreviousEducationExperience from './PreviousEducationExperience';
import RmUseOnly from './RmUseOnly';
import UploadDocuments from './UploadDocuments';

const CreateLeed = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
 
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div  className='px-24 '>
            <h1 className='text-3xl font-bold '>Create Leed</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=' mb-8  '>
          

            <section className='mb-6 '>
             <div className='justify-start'>
                <h1 className='text-xl text-slate-700 mb-6 mt-5'>Edit Personal Details</h1>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
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
                                    message:'First Name is Required'
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


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
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
                     <option disabled selected>Intake Year</option>
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



        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Previous Education & Experience</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
            <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Previous Qualification Level</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Recent Qualification Level</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Previous Qualification Title"
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
                      
                      <input type="text"
                          placeholder="Recent Qualification Title"
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
                      
                      <input type="text"
                          placeholder="Work Experience"
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
                      
                      <input type="text"
                          placeholder="Study Gap"
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
                    


            </div>
        </section>


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>English Language Test</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
            <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>IELTS</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="IELTS Result"
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

                 


            </div>
        </section>


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  '>
            <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>First Choice</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Second Choice</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Third Choice</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                  <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Fourth Choice</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>


            </div>
        </section>


        <section className='mb-6 '>
        <div className='justify-start'>
          <h1  className='text-xl text-slate-700 mb-4 mt-5'>RM Use Only</h1>
      </div>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
      <div className="form-control w-full max-w-xs">
              <select className="select w-full max-w-xs">
               <option disabled selected>Status</option>
               <option>Homer</option>
               <option>Marge</option>
               <option>Bart</option>
               <option>Lisa</option>
               <option>Maggie</option>
               </select>
        
              </div>

              <div className="form-control w-full max-w-xs">
              <select className="select w-full max-w-xs">
               <option disabled selected>Lead Course</option>
               <option>Homer</option>
               <option>Marge</option>
               <option>Bart</option>
               <option>Lisa</option>
               <option>Maggie</option>
               </select>
        
              </div>

              <div className="form-control w-full max-w-xs">
                
                <input type="text"
                    placeholder="Status Description"
                    className="input input-bordered input-lg w-full max-w-xs"
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
                
                <input type="text"
                    placeholder="Lead Source Description"
                    className="input input-bordered input-lg w-full max-w-xs"
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
               <option disabled selected>Weightage</option>
               <option>Homer</option>
               <option>Marge</option>
               <option>Bart</option>
               <option>Lisa</option>
               <option>Maggie</option>
               </select>
        
              </div>
            <div className="form-control w-full max-w-xs">
              <select className="select w-full max-w-xs">
               <option disabled selected>Assigned Person</option>
               <option>Homer</option>
               <option>Marge</option>
               <option>Bart</option>
               <option>Lisa</option>
               <option>Maggie</option>
               </select>
        
              </div>


      </div>
  </section>


  <section className='mb-6 mt-5'>
        <div>
          <h1  className='text-xl text-slate-700 mb-4 mt-6'>Upload Documents</h1>
      </div>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Completed Application Form</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>CV With 2 Reference</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>All Academic Certificate & Transcript</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Letter Of Attendence</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Work Experience Letter</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Recommendation Letter</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Statement of Purpose</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Passport with Visa Copy</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Current Sponsor Confirmation</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>English Test</p>
    </div>
</div>
      <div className="grid bg-grey-lighter">
    <label className="w-64 flex flex-col items-center px-4 py-1 bg-slate-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-white leading-normal">Select a file</span>
        <input type='file' className="hidden" />
    </label>
    <div>
        <p className='text-slate-700'>Bank Statement</p>
    </div>
</div>
      </div>
  </section>


  <section className='mb-6 '>
              <div className='justify-start'>
                <h1 className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
           

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Task Subject"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:' Required'
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
                          placeholder="Task Contact"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:' Required'
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


            </div>
        </section>

        <section className='mb-8'>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Application</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
           

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Course Name"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:' Required'
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
                          placeholder="Tuiton Fees"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:' Required'
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
                     <option disabled selected>University</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Application Status"
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", {
                              required:{
                                  value: true.valueOf,
                                  message:' Required'
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

                  
                  <div className="form-control w-full max-w-xs">
                    <select className="select w-full max-w-xs">
                     <option disabled selected>Intake Year</option>
                     <option>Homer</option>
                     <option>Marge</option>
                     <option>Bart</option>
                     <option>Lisa</option>
                     <option>Maggie</option>
                     </select>
              
                    </div>



            </div>
        </section>
           



        <div className='mt-4 mb-6'>
        <button className="btn btn-wide ">Create</button>
        </div>
            </form>
        </div>
    );
};

export default CreateLeed;



{/* <PersonalDetails></PersonalDetails>
<InterestedCourse></InterestedCourse>
<PreviousEducationExperience></PreviousEducationExperience>
<EnglishTest></EnglishTest>
<InstitutionChoice></InstitutionChoice>
<RmUseOnly></RmUseOnly>
<UploadDocuments></UploadDocuments>
<CreateTask></CreateTask>
<Application></Application> */}