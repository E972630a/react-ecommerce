import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import ProductPage from './Components/ProductsPage/products'
import Footer from './Components/Footer/footer';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="showcase" />
      <ProductPage />
      <Footer />
    </Router>
    
  )
}
export default App;