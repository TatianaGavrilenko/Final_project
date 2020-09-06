import React, {Component} from 'react'
import '../css/About.css';
import Header from './Header';
import Slider from './Slider';

//import {NavLink} from "react-router-dom";

export default class About extends Component {
    render() {
        return(
            <div className="section-about" id="/">
                <Header />
                <Slider />
            <div className="container-main">
                <div className='about-wrapper'>
                <div className="about-image">
                    <img src='images/1(3).jpg' alt=''></img>
                </div>
                <div className="about-text">
                    <h2>About Katerina</h2>
                    <div className='about-text-paragraph'>
                    <div>
                        Dedicated real estate specialist. Successfully transfers her previous expereince in the homeimprovement
                    business to highly personal approach to every client.
                    </div><br/>
                   
                    <div>
                        Known for her integrity, knowledge, commitment, honesty,
                    she understands how to handle both emotional and logical sides of the transaction.</div><br/>

                    <div className='about-text-bold'>” I understand how stressfull could be the process of buying or selling your residence, so I am always there to support
                    and to educate ” – Katerina.
                    </div> <br/>

                    <div>Katerina is also a great resource of contractors, handymen, cleaning crews and moving companies, and creates long-lasting
                    relationship with each client.
                    </div> <br/>

                    </div>
                    </div>
                </div>
            <section className="testimonials" id="testimonials">
                   
                        <h2 className='testimonials-h2'>Testimonials</h2>
                        <div className="testimonials_list">
                            <div className="testimonials_item">
                                <div className='testimonial_thumbnail1'></div>
                                <h3>Maria E. Flynn</h3>
                                <p className='testimonials_description'>MANAGER AT COLDHAWK INC.</p>
                                <p>Katerina does an incredible amount of research, she comes prepared which makes your decision making so much easier. She supports you throughout the entire process an asset for first time buyers!</p>
                            </div>
                            <div className="testimonials_item">
                                <div className='testimonial_thumbnail2'></div>
                                <h3>Dalmar Johnson</h3>
                                <p className='testimonials_description'>FOUNDER OF WEBFLEX INC.</p>
                                <p>Thanks so much for your patience and expertise with helping my family, find a home! You have been very professional and honest, when it’s come to listing our home as well. Thank you!</p>
                            </div>
                            <div className="testimonials_item">
                                <div className='testimonial_thumbnail3'></div>
                                <h3>David S. Morris</h3>
                                <p className='testimonials_description'>CEO AT ENTAVO LLC</p>
                                <p>Great service!! Bought and sold for us with great deals on both sides. He had as much time for us as we needed and gave great advice. She’s very knowledgeable. Highly recommended!</p>
                            </div>
                        </div>
                   
                </section>
            </div>
           
        </div>
        )
    }
}

/*const About = () => {
    return (
        <div className="container">
            <div className="about-wrapper" id="about">
                <div className="about-image">

                </div>
                <div className="about-text">
                    <h2>About me</h2>
                    <p className='about-text-paragraph'>
                    Dedicated real estate specialist. Successfully transfers her previous expereince in the homeimprovement
business to highly personal approach to every client.

Known for her integrity, knowledge, commitment, honesty,
she understands how to handle both emotional and logical sides of the transaction.

Katerina goes above and beyond for her clients and makes herself available for them at any time of the day or week.

” I understand how stressfull could be the process of buying or selling your residence, so I am always there to support
and to educate ” – Katerina H.

Katerina is also a great resource of contractors, handymen, cleaning crews and moving companies, and creates long-lasting
relationship with each client.

Connect and let her take it from there.
                    </p>
                </div>
            </div>
           
        </div>
    )
}

export default About;*/