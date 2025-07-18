import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, UNSAFE_createRouter, useLocation, useParams } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext";

function CountryDetail() {
  const params = useParams();
  let countryName = params.country;
  const { state } = useLocation();
  console.log(state);
  const [countryData, setCountryData] = useState(null);
  const [countryNotFound, setCountryNotFound] = useState(false);
  const [isDark] = useContext(ThemeContext)


  function updateCountryData(data){
     setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          img: data.flags.svg,
          subregion: data.subregion,
          capital: data.capital.join(" , "),
          topLevelDomain: data.tld.join(" , "),
          currencies: `${Object.values(data.currencies)[0].name} , symbol: ${
            Object.values(data.currencies)[0].symbol
          } `,

          languages: Object.values(data.languages).join(" , "),
          borders: [],
        });

        if (!data.borders) {
          return (data.border = []);
        }
        data.borders.map((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((response) => response.json())
            .then(([borderCountry]) => {
              // console.log(borderCountry)
              setCountryData((prev) => ({
                ...prev,
                borders: [...prev.borders, borderCountry.name.common],
              }));
            });
        });
  }
 

  useEffect(() => {
     if(state){
    updateCountryData(state)
    return
  }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data)
       
      })
      .catch((error) => {
        setCountryNotFound(true);
      });
  }, [countryName]);

  if (countryNotFound) {
    return "Country Not Found";
  }

  return countryData === null ? (
    "Loading..."
  ) : (
    <main className={` ${isDark?'dark':""} h-[100vh] `} >
      <div className={`country-details-container`}>
        <span
          className="back-button "
          onClick={() => {
            window.history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.img} alt={countryData.name} />
          <div className="details-text-container">
            <h1 className="text-2xl font-bold mt-3 mb-3">{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevelDomain} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
