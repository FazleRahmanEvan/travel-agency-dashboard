import React from 'react';

const EmployeeRow = ({ user,refetch,index}) => {
    const { email,role } = user;
    
   
    const makeAdmin=() =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                  alert('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert(`Successfully made an admin`);
                }
            })
            }
            const handleDelete = email=>{

                fetch(`http://localhost:5000/user/${email}`,{
                    method:'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                })
                .then(res =>res.json())
                .then(data => {
                    if(data.deletedCount){
                        // alert(`Country is deleted.`)
                        refetch();
                    }
                })
               }
            
 
   
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        <td><button onClick={() => handleDelete(email)} className="btn btn-xs">Remove </button></td>
    </tr>
    );
};

export default EmployeeRow;