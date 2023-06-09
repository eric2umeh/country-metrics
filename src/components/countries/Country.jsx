import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import classes from './Country.module.css';

const Country = ({
  name, capital, population, cc, map, flag,
}) => (
  <li className={classes.country}>
    <Link to={`/details/${cc}`}>
      <img src={map} alt={name} className={classes.map} />
      <div className={classes.country_info}>
        <div className={classes.country_header}>
          <img className={classes.flag} src={flag} alt={name} />
          <span className={classes.arrowBtn}>
            <FaArrowCircleRight />
          </span>
        </div>
        <div className={classes.country_footer}>
          <h3>{name}</h3>
          <span>{`Capital: ${capital}`}</span>
          <span>
            {`Population: ${population}
          `}
          </span>
        </div>
      </div>
    </Link>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cc: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
