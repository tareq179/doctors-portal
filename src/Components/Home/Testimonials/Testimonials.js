import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi cum aperiam blanditiis earum dolore',
        name:'Wilson Harry',
        from:'California',
        img:wilson
    },
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi cum aperiam blanditiis earum dolore',
        name:'Ema Gomez',
        from:'California',
        img:ema
    },
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi cum aperiam blanditiis earum dolore',
        name:'Aliza Farari',
        from:'California',
        img:aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What's our patients <br/> says</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial=><Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;