import { useEffect, useState } from "react"

const useSource= () => {
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/source')
    .then(res=>res.json())
    .then(data=>setSources(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, sources};
}

export default useSource;