import React, { Component } from 'react'
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import ProductList from './components/layouts/ProductList'
import Cart from './components/layouts/Cart'
import Default from './components/layouts/Default'
import Modal from './components/elements/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/App.css'


class App extends Component {
  render() {
      return (
          <>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={< ProductList/> } />
                    <Route path="/cart" element={ <Cart/> } />
                    <Route element={< Default/> } />
                </Routes>
                <Modal />
          </>
      )
  }
}

export default App
