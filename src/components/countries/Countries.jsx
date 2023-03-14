import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countries';
import Country from './Country';
import classes from './Countries.module.css';

const Countries = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.countries);

  const { region, countries } = data;

  const [currentRegion, setCurrentRegion] = useState('Africa');

  const regionHandler = (e) => {
    setCurrentRegion(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCountries(currentRegion));
  }, [dispatch, currentRegion]);

  return (
    <div className={classes.container}>
      <div className={classes.region_option}>
        <p>Filter by Continent</p>
        <select value={currentRegion} onChange={regionHandler}>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className={classes.region}>
        <div className={classes.region_map}>
          <img src={region.regionMap} alt={region.name} />
        </div>
        <div className={classes.region_info}>
          <h2>{region.name}</h2>
          <span>{`Countries: (${region.totalCountries})`}</span>
          <span>{`Population: ${region.totalPopulation}`}</span>
        </div>
      </div>
      <ul className={classes.countries}>
        {countries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            capital={country.capital || country.name}
            population={country.population}
            cc={country.cc}
            map={country.map}
            flag={country.flag}
          />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
