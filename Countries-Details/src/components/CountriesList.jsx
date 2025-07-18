import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'

function CountriesList({query}) {
    const [countryData ,setCountryData] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/independent?status=true`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        setCountryData(data)
    })
    },[])
 
  return (
   <>
   {
    countryData.length===0 ? <CountriesListShimmer/> :

   ( <div className="countries-container">
       {
        countryData.filter((country)=>{
            return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        }).map((country,i)=>{
            return <CountryCard
                key={i}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
                data = {country}
            />
        })

       }
    </div>)
   }
   </>
  )
}

export default CountriesList