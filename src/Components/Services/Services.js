import React from 'react'
import {NavLink} from "react-router-dom";
import '../../css/Services.css';

//import Nav from './Nav';




const Services = () => {

    return (
        <div className='section-services' id='services'>
            <div className='container-main'>
                <div className='service-wrapper'>
                        <div className='service-article'>
                        <h2 className='service-text'>Buying and Selling</h2>
                            <div className='service-paragraph'>
                            We understand that buying or selling a home is more than just a transaction: it’s a life-changing experience. 
                            That’s why we are dedicated to providing exceptional, personalized service for all of our clients. 
                            We take great pride in the relationships we build and always work relentlessly on the client’s behalf to help them achieve their real estate goals.
                            </div>

                            <div className='service-paragraph'>
                            The highest level of service, regardless of your timeframe or price point, is the cornerstone of our unprecedented success 
                            and is our continued promise to you. Our experienced team works together to ensure that YOU always receive the extraordinary service you 
                            expect and deserve.
                            </div>
                        </div>

                        <div className="service-image">
                            <img src='images/photo-service.jpg' alt=''></img>
                        </div>

                 </div>

                <div className='services-transfer-to-inner-pages'>
                        <span className='check-mark'>&#10004;</span> Follow this link to get more info:
                    <ul className='buy-sell'>
                        <li><NavLink to='/buy-sell'>Buyers/Sellers</NavLink></li>
                    </ul>
                    
            </div>
        </div>
    </div>
    )
   
}

export default Services;