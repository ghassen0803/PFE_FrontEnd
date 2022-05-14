import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { ProductProvider } from './components/helpers/context'
import { Provider } from "react-redux";
import store from "./Redux/store/store";
ReactDOM.render(
    <ProductProvider>
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </ProductProvider>,
    document.getElementById('root')
);