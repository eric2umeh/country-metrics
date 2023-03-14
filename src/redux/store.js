import { configureStore } from '@reduxjs/toolkit';
import countries from './countries/countries';

const store = configureStore({
  reducer: { countries },
});

export default store;
