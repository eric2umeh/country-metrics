import asiaMap from '../assets/asia.png';
import europeMap from '../assets/europe.png';
import africaMap from '../assets/africa.png';
import northAmericaMap from '../assets/north-america.png';
import southAmericaMap from '../assets/south-america.png';
import oceaniaMap from '../assets/oceania.png';
import antarcticaMap from '../assets/antarctica.png';

const imgMap = (region) => {
  switch (region) {
    case 'Asia':
      return asiaMap;
    case 'Europe':
      return europeMap;
    case 'Africa':
      return africaMap;
    case 'North America':
      return northAmericaMap;
    case 'South America':
      return southAmericaMap;
    case 'Oceania':
      return oceaniaMap;
    case 'Antarctica':
      return antarcticaMap;

    default:
      return africaMap;
  }
};

export default imgMap;
