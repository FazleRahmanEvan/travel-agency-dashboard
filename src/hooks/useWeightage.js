import { useEffect, useState } from "react"

const useWeightage= () => {
    const [weightages, setWeightages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/weightage')
    .then(res=>res.json())
    .then(data=>setWeightages(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading,weightages};
}

export default useWeightage;