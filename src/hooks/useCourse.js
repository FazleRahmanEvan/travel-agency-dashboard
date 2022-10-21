import { useEffect, useState } from "react"

const useCourse= () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/course')
    .then(res=>res.json())
    .then(data=>setCourses(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, courses};
}

export default useCourse;