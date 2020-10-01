import React, { useState, useEffect } from 'react';
import {css} from 'emotion';
import '../css/Testimonials.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
   
    const testimonials = {
        0:{
            client: 'Maria E. Flynn',
            firm: 'MANAGER AT COLDHAWK INC.',
            quote:'Katerina does an incredible amount of research, she comes prepared which makes your decision making so much easier. She supports you throughout the entire process an asset for first time buyers!',
            thumbnail: <img src='images/testimonial_2.jpg' alt=''></img>,
            client2: 'Dalmar Johnson',
            firm2: 'MANAGER AT KELLER WILLIAMS',
            quote2:'Thanks so much for your patience and expertise with helping my family, find a home! You have been very professional and honest, when it’s come to listing our home as well. Thank you!',
            thumbnail2:   <img src='images/testimonial_1.jpg' alt=''></img>,
            client3: 'Maria Brown',
            firm3: 'CEO AT ENTAVO LLC',
            quote3:'Great service!! Bought and sold for us with great deals on both sides. He had as much time for us as we needed and gave great advice. She’s very knowledgeable. Highly recommended!',
            thumbnail3:  <img src='images/testimonial_7.jpg' alt=''></img>
            

        },
        1:{
            client: 'David S. Morris',
            firm: 'CEO AT ENTAVO LLC',
            quote:'Great service!! Bought and sold for us with great deals on both sides. He had as much time for us as we needed and gave great advice. She’s very knowledgeable. Highly recommended!',
            thumbnail:  <img src='images/testimonial_4.jpg' alt=''></img>,
            client2: 'Adam Martinez',
            firm2: 'CEO AT KELLER WILLIAMS',
            quote2:'Great service!! Bought and sold for us with great deals on both sides. He had as much time for us as we needed and gave great advice. She’s very knowledgeable. Highly recommended!',
            thumbnail2:  <img src='images/testimonial_5.jpg' alt=''></img>,
            client3: 'John Green',
            firm3: 'CEO AT MULATO LLC',
            quote3:'Great service!! Bought and sold for us with great deals on both sides. He had as much time for us as we needed and gave great advice. She’s very knowledgeable. Highly recommended!',
            thumbnail3:  <img src='images/testimonial_3.jpg' alt=''></img>

        }
    }

    const [current, setCurrent] = useState(testimonials[0]);
    const [active, setActive] = useState(0);

    const handleSetClick = (event) =>{
        setCurrent(testimonials[event.target.getAttribute('data-testimonial')])
        setActive(event.target.getAttribute('data-testimonial'))
    }

    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className={css`
            span[data-testimonial='${active}']::before{
                background-color: black;
            }
        `}>
        <section className='testimonials' data-aos='fade-up' id='people-talk'>
            <h2 className='testimonials-h2'>People Talk</h2>
            <div className='testimonials_list'>
                <div className='testimonials_item'>
                    <div className='testimonial_thumbnail'>
                        <div>{current.thumbnail}</div>
                    </div>
                    <h3>{current.client}</h3>
                    <p className='testimonials_description'>{current.firm}</p>
                    <p>{current.quote}</p>
                </div>
                <div className='testimonials_item'>
                    <div className='testimonial_thumbnail'>
                        <div>{current.thumbnail2}</div>
                    </div>
                    <h3>{current.client2}</h3>
                    <p className='testimonials_description'>{current.firm2}</p>
                    <p>{current.quote2}</p>
                </div>
                <div className='testimonials_item'> 
                    <div className='testimonial_thumbnail'>
                        <div>{current.thumbnail3}</div>
                    </div>
                    <h3>{current.client3}</h3>
                    <p className='testimonials_description'>{current.firm3}</p>
                    <p>{current.quote3}</p>
                </div>
            </div>
            <div className='span'>
                    {Object.keys(testimonials).map(index =>(
                        <span className='span-testimonials'
                        onClick={event => handleSetClick(event, active)}
                        data-testimonial={index}
                        key={index} 
                        />
                    ))}
                </div>
        </section>
        </div>
    )
}

export default Testimonials;