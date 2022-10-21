import { useEffect, useState } from "react"

const useStudentType= () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/student')
    .then(res=>res.json())
    .then(data=>setStudents(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, students};
}

export default useStudentType;