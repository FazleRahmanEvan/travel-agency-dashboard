import { useEffect, useState } from "react"

const useEmployee= () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>setEmployees(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, employees};
}

export default useEmployee;