import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import filterReduser from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
  
});