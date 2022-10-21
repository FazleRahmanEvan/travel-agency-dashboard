import { useEffect, useState } from "react"

const useUniversity= () => {
    const [universitys, setUniversitys] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/university')
    .then(res=>res.json())
    .then(data=>setUniversitys(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, universitys};
}

export default useUniversity;