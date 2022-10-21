// import { useEffect, useState } from "react"

// const useFetch = (tableName) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(()=>{
//     setLoading(true);
//     fetch(`http://localhost:5000/${tableName}`)
//     .then(res=>res.json())
//     .then(data=>setData(data))
//     .catch(err=>console.log(err))
//     .finally(()=>setLoading(false)) 
//     },[tableName]);


//     return {loading, data};
// }

// export default useFetch;