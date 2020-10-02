import React, {useEffect} from 'react';
import '../css/About.css';
import Header from './Header';
import Slider from './Slider';
import Testimonials from './Testimonials';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Nav from './Nav/Nav';
import img1 from '../images/1(3).jpg';

const About = () => {

    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return(
            
        <div className='section-about' id='/'>
                <Header />
                <Slider />
                <Nav />
                <div className='container-main'>
                    <div className='about-wrapper'>
                    <div className='about-image' data-aos='fade-left'>
                        <img className='fadeInLeft' src={img1} alt=''></img>
                    </div>
                    <div className='about-text' data-aos='fade-right' id='about'>
                        <h2>About Katerina</h2>
                        <div className='about-text-paragraph'>
                        <div className='about-text-p'>
                            Dedicated real estate specialist. Successfully transfers her previous expereince in the homeimprovement
                        business to highly personal approach to every client.
                        </div><br/>
                    
                        <div className='about-text-p'>
                            Known for her integrity, knowledge, commitment, honesty,
                        she understands how to handle both emotional and logical sides of the transaction.</div><br/>
                        
                        <div className='about-text-bold'>” I understand how stressfull could be the process of buying or selling your residence, so I am always there to support
                        and to educate ” – Katerina.
                        </div> <br/>

                        <div className='about-text-p'>Katerina is also a great resource of contractors, handymen, cleaning crews and moving companies, and creates long-lasting
                        relationship with each client.
                        </div> <br/>
                        </div>
                        </div>
                    </div>
                    <Testimonials />
                </div>
        </div>
        )
    }

export default About;
    

