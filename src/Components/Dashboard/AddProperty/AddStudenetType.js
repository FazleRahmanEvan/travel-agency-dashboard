import React from 'react';

const AddStudenetType = () => {
    return (
        <div className='text-center mb-8'>
        <h1>Add Students</h1>
        <div className='mt-6 '>
      <div>
      <input  type="text" placeholder="Country" className="input w-full max-w-xs" />
      </div>
        <div>
        <button className="btn btn-wide mt-3">Create</button>
        </div>
        </div>
    </div>
    );
};

export default AddStudenetType;