import React from 'react';

const DeleteConfirm = ({country}) => {
    const{ id}= country;

    const handleDelete = id=>{
        fetch(`http://localhost:5000/country/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                alert(`Country is deleted.`)
            }
        })
    }
    
    return (
        <div>
            
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirm;