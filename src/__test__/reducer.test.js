import configureMockStore from 'redux-mock-store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const weatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherApiKey = 'efc7d30d6d8f8050dae8859f7ba1a7f2';

const fetchData = createAsyncThunk('countries/fetch-data', async () => {
  const response = await fetch('https://restcountries.com/v3.1/region/Asia');
  const result = await response.json();
  const lent = result.length;
  return lent;
});

const fetchWeatherData = createAsyncThunk('weather/fetch-weather', async () => {
  const response = await fetch(
    `${weatherApiBaseUrl}?lat=25&lon=91&appid=${weatherApiKey}&units=metric`,
  );
  const result = await response.json();
  let isWeatherDataFetched = false;
  if (result.name) {
    isWeatherDataFetched = true;
  }
  return isWeatherDataFetched;
});

const initialState = {
  countries: 0,
  isWeatherDataFetched: false,
};

const countriesSlice = createSlice({
  name: 'countryslice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const newState = {
        ...state,
        countries: action.payload,
      };
      return newState;
    });

    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      const newState = {
        ...state,
        countries: action.payload,
      };
      return newState;
    });
  },
});

const mockStore = configureMockStore([thunk]);

describe('test redux async actions', () => {
  it('creates FETCH_DATA_SUCCESS when fetching data has been done', () => {
    const store = mockStore({ country: countriesSlice.reducer });

    const expectedActions = [
      {
        type: fetchData.pending.type,
        meta: {
          requestId: expect.any(String),
          requestStatus: 'pending',
          arg: undefined,
        },
        payload: undefined,
      },
      {
        type: fetchData.fulfilled.type,
        meta: {
          requestId: expect.any(String),
          requestStatus: 'fulfilled',
          arg: undefined,
        },
        payload: 50,
      },
    ];
    return store.dispatch(fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_DATA_SUCCESS when fetching data has been done', () => {
    const store = mockStore({ country: countriesSlice.reducer });

    const expectedActions = [
      {
        type: fetchWeatherData.pending.type,
        meta: {
          requestId: expect.any(String),
          requestStatus: 'pending',
          arg: undefined,
        },
        payload: undefined,
      },
      {
        type: fetchWeatherData.fulfilled.type,
        meta: {
          requestId: expect.any(String),
          requestStatus: 'fulfilled',
          arg: undefined,
        },
        payload: true,
      },
    ];
    return store.dispatch(fetchWeatherData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
