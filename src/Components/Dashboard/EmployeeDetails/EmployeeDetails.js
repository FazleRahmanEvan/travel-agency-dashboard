import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import EmployeeRow from './EmployeeRow';

const EmployeeDetails = () => {
    const {data:user,  refetch, isLoading} = useQuery ('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='p-4'>
        <div>
            <h1 className='text-3xl font-bold mb-6 mt-5 pl-5'>Employee List: {user.length}</h1>
        </div>
        <div className="overflow-x-auto">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                              <th>SL</th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                          Array.from(user)?.map( (user,index) => 
                           
                           <EmployeeRow
                           key={index}
                           user={user}
                           index={index}
                           refetch={refetch}
                           />)
                       }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default EmployeeDetails;