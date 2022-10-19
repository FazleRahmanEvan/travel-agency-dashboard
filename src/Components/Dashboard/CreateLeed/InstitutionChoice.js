import React from 'react';

const InstitutionChoice = () => {
    return (
        <section>
              <div className='justify-start'>
                <h1  className='text-xl text-slate-700 mb-4 mt-5'>Interested Course</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-evenly '>
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
    );
};

export default InstitutionChoice;