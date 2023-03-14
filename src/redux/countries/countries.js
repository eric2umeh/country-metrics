import { v4 as uuidV4 } from 'uuid';
import { countryApi, mapBaseUrl } from '../../api/api';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async (region) => {
    const response = await fetch(`${countryApi}${region}`);
    const result = await response.json();
    let totalPopulations = 0;
    const countries = result.map((item) => {
      totalPopulations += item.populqation;
      return {
        id: uuidV4(),
        name: item.name.common,
        capital: `${!item.capital ? 'Not Provided' : item.capital[0]}`,
        population: item.population,
        cc: item.cca2,
        flag: item.flags.svg,
        map: `${mapBaseUrl}${item.cca2.toLowerCase()}/vector.svg`,
        lat: item.latlng[0],
        lon: item.latlng[0],
      };
    }).sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
    return {
        region: {
            name: region,
            regionMap: generateMap(region)
        }
    }
  },
);
