import { useEffect, useState } from "react"

const useCountry = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/country')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false)) 
    },[]);


    return {loading, countries};
}

export default useCountry;