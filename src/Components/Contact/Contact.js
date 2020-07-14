import React from 'react';



class Products extends React.Component {
    render() {
        return (
            <div>
                    <section id="contact-form" className="py-3">
        <div className="contact-container">
            <h1 className="l-heading--center"> <span className="text-primary">Contact</span> Us</h1>
            <p className="l-paragraph-center">Please fill out the form below to contact us</p>
            <form action="contact.html" onsubmit="validation()">
                <div className="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email Address:</label>
                    <input type="text" name="email" id="email" required />
                </div>
                <div className="form-group">
                    <label for="message">Message or Questions:</label>
                    <textarea name="message" id="message" required></textarea>
                    <div id="error_message"></div>
                    <button type="submit" className="btn">Submit</button> <br />
                </div>
            </form>
        </div>
    </section>
            </div>
        )
    }
}
export default Products;