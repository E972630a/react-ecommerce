import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/index'
import ProductPage from './Components/ProductsPage/products'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/footer';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={ProductPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
    
  )
}
export default App;