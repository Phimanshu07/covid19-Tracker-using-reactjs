import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchcountries} from '../../api'


const CountryPicker= ({handleCountryChange}) =>{
    const [fetchedCountry,setfetchedCountry] =useState([]);

    useEffect( () =>{
      const fetchApi=async ()=>{
        
          setfetchedCountry(await fetchcountries());
      }
       //console.log(dailyData)
       fetchApi();
    },[setfetchedCountry]);
    //console.log(fetchedCountries)

    return(
       <FormControl className={styles.container}>
           <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
               <option value="">Global</option>
               {fetchedCountry.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl> 
    )
}


export default CountryPicker



