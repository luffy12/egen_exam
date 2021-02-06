import React, { useState,useEffect } from 'react';
import FetchData from './FetchData';
import Job from './Job';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import JPagination from './JPagination';
import SearchForm from './SearchForm';
import opencage  from 'opencage-api-client';
function Home({darkMode}) {
  
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
//To get the current location 
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {

//       fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=de1426ebdd8a4e52b5c7e04db73096ac`).then(response=>response.json()).then(data=>console.log(data.results[0].formatted)) 
//     });
// }, []);
  
  const { jobs, loading, error, hasNextPage } = FetchData(params, page)
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <div  style={{margin:30}}>    
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <div style={{display:"flex",justifyContent:"center",alignContent:"center",height:"80vh",alignItems:"center"}}>
 <CircularProgress/>
            </div>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <Grid container spacing={2} style={{margin:25,width:"auto"}} spacing={1}>
      {jobs.map(job => (
         <Grid item xs={12} sm={4} key={job.id}>
           <Job key={job.id} job={job}  darkMode={darkMode}/> 
           </Grid>
      ))}
      </Grid>
      <JPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </div>
  )
}
       

export default Home