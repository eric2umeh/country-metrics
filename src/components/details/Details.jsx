import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GiPressureCooker } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { FaWind, FaCloud } from 'react-icons/fa';
import {
  TbTemperature,
  TbTemperatureMinus,
  TbTemperaturePlus,
} from 'react-icons/tb';
import { fetchWeather } from '../../redux/weather/weather';
import classes from './Details.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  const countries = useSelector((state) => state.countries.countries);

  const { cc } = useParams();

  const country = countries.find(
    (country) => country.cc.toLocaleLowerCase() === cc.toLocaleLowerCase(),
  );

  useEffect(() => {
    if (country) {
      dispatch(fetchWeather({ lat: country.lat, lon: country.lon }));
    }
  }, [dispatch, country]);

  let weatherContent = (
    <span className={classes.no_content}>
      No data found!
      <Link to="/">Home</Link>
    </span>
  );

  if (country && weather.name) {
    weatherContent = (
      <>
        <div className={classes.details}>
          <div className={classes.map}>
            <img src={country.map} alt={country.name} />
          </div>
          <div className={classes.details_header}>
            <h2>{country.name}</h2>
            <p>{weather.description}</p>
            <img src={weather.icon} alt={weather.name} />
          </div>
        </div>

        <div className={classes.weather}>
          <ul className={classes.weather_info}>
            <li className={classes.weather_item}>
              <span>
                Temperature:
              </span>
              <span>
                {weather.temp}
                &#8451;
                <TbTemperature />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                {' '}
                Feels Like:
              </span>
              <span>

                {weather.feels_like}
                &#8451;
                <TbTemperature />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                {' '}
                Min Temperature:
              </span>
              <span>
                {weather.temp_min}
                {' '}
                &#8451;
                <TbTemperatureMinus />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                {' '}
                Max Temperature:
              </span>
              <span>
                {weather.temp_max}
                {' '}
                &#8451;
                <TbTemperaturePlus />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                {' '}
                Humidity:
              </span>
              <span>
                {weather.humidity}
                {' '}
                %
                <WiHumidity />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                Pressure:
              </span>
              <span>
                {weather.pressure}
                &#13169;
                <GiPressureCooker />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                Wind Speed:
              </span>
              <span>
                {weather.wind_speed}
                {' '}
                meter/sec
                <FaWind />
              </span>
            </li>
            <li className={classes.weather_item}>
              <span>
                Cloud cover:
              </span>
              <span>
                {weather.cloud}
                %
                <FaCloud />
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  }

  return <div className={classes.container}>{weatherContent}</div>;
};

export default Details;
