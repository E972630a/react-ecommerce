import React from 'react';


class Products extends React.Component {
    
    render() {
        return (
            <div>
                <div class="slideShow-container">
                    <img className="imageSlides" src="img/slideShowImage1.jpg" alt="perfume or cologne bottle" />
                    <img className="imageSlides" src="img/slideShowImage2.jpg" alt="perfume or cologne bottle" />
                    <img className="imageSlides" src="img/imageSlide4.jpg" alt="perfume or cologne bottle" />
                </div>
                <section id="home-info" className="bg-dark">
                    <div className="info-img" />
                    <div className="info-content">
                        <h2><span className="light-color">The History</span> PFragrance</h2>
                        <p>Have provided some of the best colonges and perfumes for the past years. Our products are one the most
                            popular among the past customers. We provide for both men and women and some low prices. </p>
                        <a id="read-btn" href="products.html">Read More</a>
                    </div>
                </section>
            </div>
        )
    }
}
export default Products;
 