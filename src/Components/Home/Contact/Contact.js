import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary text-uppercase">contact us</h5>
                    <h1>Always Contact with Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address**"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject*"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;