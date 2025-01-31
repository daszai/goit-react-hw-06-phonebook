import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  aaa: 'fdfd',
};

const tasksSlice = createSlice({
  // Nazwa slice'u
  name: 'tasks',
  // Początkowy status reducera slice'u
  initialState: tasksInitialState,
  // Obiekt reducerów
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

const store = configureStore({
  //automatycznie tworzy reducer i go dzieli
  reducer: {
    tasks: tasksSlice,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>
);
