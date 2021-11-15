// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Style Sheet
import "./index.css";

// Components
import App from './App';

// Reducer
import reducer from "./reducers";

// Redux Store
const store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
