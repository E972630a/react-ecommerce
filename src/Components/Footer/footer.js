import React from 'react';
import '../../App.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer id="main-footer">
                    <p>PFRAGRANCE &copy; 2020 | All Rights Reserved</p>
                    <a href="https://www.facebook.com/"><img class="social"
                        src="https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
                        alt="facebook logo" /></a>
                    <a href="https://www.instagram.com/"><img class="social"
                        src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png"
                        alt="instagram logo" /></a>
                    <a href="https://twitter.com/?lang=en"><img class="social"
                        src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png"
                        alt="twitter logo" /></a>
                </footer>
            </div>
        );
    }
}
