import { useEffect, useState } from "react"

const useStatus= () => {
    const [statuses, setStatuses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/status')
    .then(res=>res.json())
    .then(data=>setStatuses(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading,statuses};
}

export default useStatus;