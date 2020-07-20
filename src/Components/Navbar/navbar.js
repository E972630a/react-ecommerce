import React from 'react';
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
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
