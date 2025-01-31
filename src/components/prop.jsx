import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  contacts: [
    { name: 'hej', id: 1, number: 5454 },
    { name: 'he43j', id: 2, number: 543454 },
    { name: '4h43ej', id: 3, number: 54435254 },
    { name: 'STORE', id: 4, number: 454435254 },
  ],
  name: 'fffffffffff',
  number: '',
  filter: '',
};

const tasksSlice = createSlice({
  // Nazwa slice'u
  name: 'tasks',
  // Początkowy status reducera slice'u
  initialState: tasksInitialState.contacts,
  // Obiekt reducerów
  reducers: {
    contactsChangeslice(state, action) {
      let temp = state[1].name;
      console.log(temp);
      state = temp;
    },
  },
});
const tasksSlice2 = createSlice({
  // Nazwa slice'u
  name: 'tasks2',
  // Początkowy status reducera slice'u
  initialState: tasksInitialState.name,
  // Obiekt reducerów
  reducers: {
    contactsChangeslice2(state, action) {
      return state + 'temp';
    },
  },
});
const tasksReducer = tasksSlice.reducer;
const tasksReducer2 = tasksSlice2.reducer;
export const { contactsChangeslice } = tasksSlice.actions;
export const { contactsChangeslice2 } = tasksSlice2.actions;

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    name: tasksReducer2,
  },
});
