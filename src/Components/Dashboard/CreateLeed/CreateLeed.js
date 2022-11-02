import React from 'react';
import { useForm } from 'react-hook-form';

import useCountry from '../../../hooks/useCountry';
import useCourse from '../../../hooks/useCourse';
import useStatus from '../../../hooks/useStatus';
import useSource from '../../../hooks/useSource';
import useWeightage from '../../../hooks/useWeightage';
import useUniversity from '../../../hooks/useUniversity';
import useStudentType from '../../../hooks/useStudentType';
import useEmployee from '../../../hooks/useEmployee';

import axios from 'axios'
import Loading from '../../Shared/Loading';
import { useState } from 'react';





const CreateLeed = () => {
    
    const {loading, countries} = useCountry('country');
    const { students} = useStudentType('student');
    const { courses} = useCourse('course');
    const { statuses} = useStatus('status');
    const { sources} = useSource('source');
    const { weightages} = useWeightage('weightage');
    const { universitys} = useUniversity('university');
    const {employees} = useEmployee('user');
    
    // const [startDate, setStartDate] = useState(new Date());
  

    const {
        register,
    
        handleSubmit,
      } = useForm();
 
    const onSubmit = data => {
        axios.post('http://localhost:5000/leeds', data)
        .then(res=> console.log(res) )
        .catch(err=> console.log(err))
        
        alert(`Leed is Created.`);

    }

    if(loading){
        return <Loading/>
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
                        <input type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("firstname", {
                                required:{
                                    
                                    message:'First Name is Required'
                                }
                            })}
                        />
                       
                    </div>


                   <div className="form-control w-full max-w-xs">
                      
                        <input type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("secondname", {
                                required:{
                                    
                                    message:'Last Name is Required'
                                }
                            })}
                        />
                      
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select    {...register("studentame")} className="select w-full max-w-xs">
                    <option disabled selected>Select Student Type</option>
                     {
                               students?.map((student,index) =><option 
                                key={index}
                                value={student.studentName}
                               >{student.studentName}</option>)
                           }
                   
                     </select>
              
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <select    {...register("countryname")} className="select w-full max-w-xs">
                    <option disabled selected>Apply Country</option>
                    {
                               countries?.map((country,index) =><option 
                                key={index}
                                value={country.countryName}
                               >{country.countryName}</option>)
                           }
                     
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Email"
                          className="input input-bordered w-full max-w-xs"
                          {...register("email", {
                              required:{
                                 
                                  message:'Email'
                              }
                          })}
                      />
                     
                  </div>

                  <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Origin Country"
                          className="input input-bordered w-full max-w-xs"
                          {...register("originCountry", {
                              required:{
                               
                                  message:'Origin Country'
                              }
                          })}
                      />
                    
                  </div>

                  <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Phone"
                          className="input input-bordered w-full max-w-xs"
                          {...register("phone", {
                              required:{
                                  
                                  message:' Required'
                              }
                          })}
                      />
                     
                  </div>

                  <div className="form-control w-full max-w-xs">
                  <input type="text"
                          placeholder="Optional Phone"
                          className="input input-bordered w-full max-w-xs"
                          {...register("optionalPhone", {
                              required:{
                                 
                                  message:'Required'
                              }
                          })}
                      />
                      
                  </div>
         </div>

        </section>


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
            <div className="form-control w-full max-w-xs">
                    <select {...register("coursename")}  className="select w-full max-w-xs">
                     <option disabled selected>Course Level</option>
                     {
                               courses?.map((course,index) =><option 
                                key={index}
                                value={course.courseName}
                               >{course.courseName}</option>)
                           }
                     </select>
              
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <select {...register("courseIntakeYear")}  className="select w-full max-w-xs">
                     <option disabled selected>Intake Year</option>
                     <option>2000</option>
                     <option>2001</option>
                     <option>2002</option>
                     <option>2003</option>
                     <option>2004</option>
                     <option>2005</option>
                     <option>2006</option>
                     <option>2007</option>
                     <option>2008</option>
                     <option>2009</option>
                     <option>2010</option>
                     <option>2011</option>
                     <option>2012</option>
                     <option>2013</option>
                     <option>2014</option>
                     <option>2015</option>
                     <option>2016</option>
                     <option>2017</option>
                     <option>2018</option>
                     <option>2019</option>
                     <option>2020</option>
                     <option>2021</option>
                     <option>2022</option>
                     <option>2023</option>
                     <option>2024</option>
                     <option>2025</option>
                     <option>2026</option>
                     <option>2027</option>
                     <option>2028</option>
                     <option>2029</option>
                     <option>2030</option>
                     <option>2031</option>
                     <option>2032</option>
                     <option>2033</option>
                     <option>2034</option>
                     <option>2035</option>
                     <option>2036</option>
                     <option>2037</option>
                     <option>2038</option>
                     <option>2039</option>
                     <option>2040</option>
                     <option>2041</option>
                     <option>2042</option>
                     <option>2043</option>
                     <option>2044</option>
                     <option>2045</option>
                     <option>2046</option>
                     <option>2047</option>
                     <option>2048</option>
                     <option>2049</option>
                     <option>2050</option>
                
                     </select>
              
                    </div>



                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Course Title"
                          className="input input-bordered w-full max-w-xs"
                          {...register("courseTitle", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                      
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <select {...register("courseIntakeMonth")}  className="select w-full max-w-xs">
                     <option disabled selected>Intake Month</option>
                     <option>January</option>
                     <option>February</option>
                     <option>March</option>
                     <option>April</option>
                     <option>May</option>
                     <option>June</option>
                     <option>July</option>
                     <option>August</option>
                     <option>September</option>
                     <option>October</option>
                     <option>November</option>
                     <option>December</option>
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
                    <select {...register("previousQualificationLevel")} className="select w-full max-w-xs">
                     <option disabled selected>Previous Qualification Level</option>
                     <option>HSC</option>
                     <option> BA (Bachelor of Arts)</option>
                     <option>BSS (Bachelor of Social Science)</option>
                     <option>BSc (Bachelor of Science)</option>
                     <option>BBA (Bachelor of Business Administration )</option>
                     <option>BArch(Bachelor of Architecture )</option>
                     <option>BComm (Bachelor of Commerce)</option>
                     <option>BPharm (Bachelor of Pharmacy )</option>
                     <option>BTech (Bachelor of Technology)</option>
                     <option>BCL (Bachelor of Civil Law)</option>
                     <option>Dakhil</option>
                     <option>Alim </option>
                     <option>Fazil</option>

                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <select {...register("recentQualificationLevel")} className="select w-full max-w-xs">
                     <option disabled selected>Recent Qualification Level</option>
                     <option>HSC</option>
                     <option> BA (Bachelor of Arts)</option>
                     <option>BSS (Bachelor of Social Science)</option>
                     <option>BSc (Bachelor of Science)</option>
                     <option>BBA (Bachelor of Business Administration )</option>
                     <option>BArch(Bachelor of Architecture )</option>
                     <option>BComm (Bachelor of Commerce)</option>
                     <option>BPharm (Bachelor of Pharmacy )</option>
                     <option>BTech (Bachelor of Technology)</option>
                     <option>BCL (Bachelor of Civil Law)</option>
                     <option>Dakhil</option>
                     <option>Alim </option>
                     <option>Fazil</option>
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Previous Qualification Title"
                          className="input input-bordered w-full max-w-xs"
                          {...register("previousQualification", {
                              required:{
                                 
                                  message:'Required'
                              }
                          })}
                      />
                     
                  </div>

                  <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Recent Qualification Title"
                          className="input input-bordered w-full max-w-xs"
                          {...register("recentQualification", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                     
                  </div>
                  <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Work Experience"
                          className="input input-bordered w-full max-w-xs"
                          {...register("workExperience", {
                              required:{
                                 
                                  message:'Required'
                              }
                          })}
                      />
                     
                  </div>
                  <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Study Gap"
                          className="input input-bordered w-full max-w-xs"
                          {...register("studyGap", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                      
                  </div>
                    


            </div>
        </section>


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>English Language Test</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
            <div className="form-control w-full max-w-xs">
                    <select {...register("ielts")}  className="select w-full max-w-xs">
                     <option disabled selected>IELTS</option>
                     <option>Yes</option>
                     <option>No</option>
                     <option>Will Give</option>
                    
                     </select>
              
                    </div>

                    

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="IELTS Result"
                          className="input input-bordered w-full max-w-xs"
                          {...register("ieltsResult", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                    
                  </div>
                  

                 


            </div>
        </section>


        <section className='mb-6 '>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  '>
            <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="First Choice"
                          className="input input-bordered w-full max-w-xs"
                          {...register("courseFirstChoice", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                    
                  </div>
            <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Second Choice"
                          className="input input-bordered w-full max-w-xs"
                          {...register("courseSecondChoice", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                    
                  </div>
            <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Third Choice"
                          className="input input-bordered w-full max-w-xs"
                          {...register("courseThirdChoice", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                    
                  </div>
            <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Fourth Choice"
                          className="input input-bordered w-full max-w-xs"
                          {...register("courseFourthChoice", {
                              required:{
                                  
                                  message:'Required'
                              }
                          })}
                      />
                    
                  </div>

            </div>
        </section>


        <section className='mb-6 '>
        <div className='justify-start'>
          <h1  className='text-xl text-slate-700 mb-4 mt-5'>DS Use Only</h1>
      </div>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
      <div className="form-control w-full max-w-xs">
              <select {...register("statusname")} className="select w-full max-w-xs">
               <option disabled selected>Status</option>
               {
                               statuses?.map((status,index) =><option 
                                key={index}
                                value={status.statusName}
                               >{status.statusName}</option>)
                           }
               </select>
        
              </div>

              <div className="form-control w-full max-w-xs">
              <select {...register("sourcename")} className="select w-full max-w-xs">
               <option disabled selected>Lead Source</option>
               {
                              sources?.map((source,index) =><option 
                                key={index}
                                value={source.sourceName}
                               >{source.sourceName}</option>)
                           }
               </select>
        
              </div>

              <div className="form-control w-full max-w-xs">
                
                <input type="text"
                    placeholder="Status Description"
                    className="input input-bordered input-lg w-full max-w-xs"
                    {...register("statusDescription", {
                        required:{
                           
                            message:'Required'
                        }
                    })}
                />
              
            </div>
              <div className="form-control w-full max-w-xs">
                
                <input type="text"
                    placeholder="Lead Source Description"
                    className="input input-bordered input-lg w-full max-w-xs"
                    {...register("leadSourceDescription", {
                        required:{
                        
                            message:'Required'
                        }
                    })}
                />
               
            </div>

            <div className="form-control w-full max-w-xs">
              <select {...register("weightagename")} className="select w-full max-w-xs">
               <option disabled selected>Weightage</option>
               {
                              weightages?.map((weightage,index) =><option 
                                key={index}
                                value={weightage.weightageName}
                               >{weightage.weightageName}</option>)
                           }
               </select>
        
              </div>
            <div className="form-control w-full max-w-xs">
              <select {...register("assignedPerson")} className="select w-full max-w-xs">
               <option disabled selected>Assigned Person</option>
              {
                  employees?.map((user,index) =><option 
                  key={index}
                  value={user.email}
                 >{user.email}</option>)
              }
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
        <input type='file'  className="hidden"   
         {...register("completedApplicationForm", {
                        required: {
                            
                            message: 'Image is Required'
                        }
                    })} />
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
        <input type='file' className="hidden"
          {...register("cvFile", {
            required: {
               
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("academicCertificate", {
            required: {
               
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("letterAttendence", {
            required: {
              
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("workExperienceLetter", {
            required: {
              
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("recommendationLetter", {
            required: {
         
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("statementOfPurpose", {
            required: {
               
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("passportVisaCopy", {
            required: {
               
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden"
           {...register("currentSponsor", {
            required: {
              
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("english test", {
            required: {
               
                message: 'Image is Required'
            }
        })}
        />
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
        <input type='file' className="hidden" 
           {...register("bankStatement", {
            required: {
        
                message: 'Image is Required'
            }
        })}
        />
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
                          {...register("taskSubject", {
                              required:{
                          
                                  message:' Required'
                              }
                          })}
                      />
                     
                  </div>
                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Task Contact"
                          className="input input-bordered w-full max-w-xs"
                          {...register("taskContact", {
                              required:{
                             
                                  message:' Required'
                              }
                          })}
                      />
                     
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
                          {...register("courseName", {
                              required:{
                               
                                  message:' Required'
                              }
                          })}
                      />
                      
                  </div>
                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Tuiton Fees"
                          className="input input-bordered w-full max-w-xs"
                          {...register("tuitonFee", {
                              required:{
                              
                                  message:' Required'
                              }
                          })}
                      />
                      
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <select {...register("university")} className="select w-full max-w-xs">
                     <option disabled selected>University</option>
                     {
                              universitys?.map((university,index) =><option 
                                key={index}
                                value={university.universityName}
                               >{university.universityName}</option>)
                           }
                     </select>
              
                    </div>

                    <div className="form-control w-full max-w-xs">
                      
                      <input type="text"
                          placeholder="Application Status"
                          className="input input-bordered w-full max-w-xs"
                          {...register("applicationStatus", {
                              required:{
                              
                                  message:' Required'
                              }
                          })}
                      />
                     
                  </div>

                  
                  <div className="form-control w-full max-w-xs">
                    <select {...register("applicationIntakeMonth")} className="select w-full max-w-xs">
                     <option disabled selected>Intake Month</option>
                     <option>January</option>
                     <option>February</option>
                     <option>March</option>
                     <option>April</option>
                     <option>May</option>
                     <option>June</option>
                     <option>July</option>
                     <option>August</option>
                     <option>September</option>
                     <option>October</option>
                     <option>November</option>
                     <option>December</option>
                     </select>
              
                    </div>

                  <div className="form-control w-full max-w-xs">
                    <select {...register("applicationIntakeYear")}  className="select w-full max-w-xs">
                     <option disabled selected>Intake Year</option>
                     <option>2000</option>
                     <option>2001</option>
                     <option>2002</option>
                     <option>2003</option>
                     <option>2004</option>
                     <option>2005</option>
                     <option>2006</option>
                     <option>2007</option>
                     <option>2008</option>
                     <option>2009</option>
                     <option>2010</option>
                     <option>2011</option>
                     <option>2012</option>
                     <option>2013</option>
                     <option>2014</option>
                     <option>2015</option>
                     <option>2016</option>
                     <option>2017</option>
                     <option>2018</option>
                     <option>2019</option>
                     <option>2020</option>
                     <option>2021</option>
                     <option>2022</option>
                     <option>2023</option>
                     <option>2024</option>
                     <option>2025</option>
                     <option>2026</option>
                     <option>2027</option>
                     <option>2028</option>
                     <option>2029</option>
                     <option>2030</option>
                     <option>2031</option>
                     <option>2032</option>
                     <option>2033</option>
                     <option>2034</option>
                     <option>2035</option>
                     <option>2036</option>
                     <option>2037</option>
                     <option>2038</option>
                     <option>2039</option>
                     <option>2040</option>
                     <option>2041</option>
                     <option>2042</option>
                     <option>2043</option>
                     <option>2044</option>
                     <option>2045</option>
                     <option>2046</option>
                     <option>2047</option>
                     <option>2048</option>
                     <option>2049</option>
                     <option>2050</option>
                
                     </select>
              
                    </div>

            </div>
        </section>
           



        <div className='mt-10 mb-16 text-center pr-24'>
        <button className="btn btn-wide ">Create</button>
        </div>


            </form>
        </div>
    );
};

export default CreateLeed;



