import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav id="navbar">
                        <img className="logo-img" alt="perfume logo" src="/img/Logo3.png" />
                        <div className="container">
                            <h1>PFRAGRANCE</h1>
                            <ul>
                                <li><Link exact={true} to="/index">Home</Link></li>
                                <li><Link exact={true} to="/products">Products</Link></li>
                                <li><Link exact={true} to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
