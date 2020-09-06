import React, {useState } from 'react';
import Modal from 'react-modal';
import '../../css/Buyers.css';
//import { bounce } from 'react-animations';
//import { CSSTransitionGroup } from 'react-transition-group';
Modal.setAppElement('#root')

const Buyers= () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
    <div className='buyers-sellers' id='buy-sell'>
        <div className='container-main'>
            <div className='section-buying'>
                <div className='buyers-sellers-wrapper'>
                    <div className='buying-article'>
                        <h2 className='buying-selling-text'>BUY WITH US</h2>
                        <div className='buying-selling-paragraph'>
                            Whether you’re buying your first home or your tenth, it’s critical to have the right professional there to help. In this competitive environment, having the right strategy to find and secure your perfect home is critical, and an understanding of the local markets is crucial.
                        </div>
                        <div className='buying-selling-paragraph'>
                            Our access to hundreds of millions of dollars’ worth of off-market listings is unparalleled and we have a proven record of winning multiple-offer bids for our clients. Our methods are targeted and unique, and our clients appreciate the additional value we bring to interpreting the myriad of information available online.
                        </div>
                        <div className='buying-selling-paragraph'>
                            Once the right home is identified, we guide our clients through the escrow process from start to finish. Our team manages the process and provides expert negotiation support to ensure a positive outcome for our clients. Time and time again, our clients have been impressed with our ability to make a stressful process feel seamless.
                        </div>
                        <div className='buying-selling-paragraph-bold'>
                            Let us know what you’re looking for. We’ll make sure you get it.
                        </div>
                    </div>
                    <div className='buying-image'>
                        <img src='images/buyer-img.jpg' alt='' />
                    </div>
                </div>
                <button onClick={() => setModalIsOpen(true)} className='transfer-to-popup'>HELP ME BUY</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div className='popup-contact'>
                    <div className='container-main'>
                        <div className="popup-contact-form-wrapper">
                        <div>
                            <button className='popup-close-btn' onClick={() => setModalIsOpen(false)}>X</button>
                        </div>
                        <div className="popup-top-logo">
                                <div className="k">
                                Katerina
                                </div>
                                <div className="h">
                                Gavrilenko
                                </div>
                        </div>
               
                        <form method="post"> 
                            <div className='popup-contact-fields'>
                                <input type='text' placeholder='First Name'/>
                                <input type='text' placeholder='Last Name'/>
                                <input type='email' placeholder='E-mail'/>
                                <input type='phone' placeholder='Phone'/>
                            </div>
                            <div className='popup-message-field'>
                                <textarea placeholder="Message*" name="message" maxLength="500"></textarea>
                            </div>
                        </form>
                        <button className="popup_button_message" type="submit">Submit</button>
                        </div>
                    </div>
                    </div>
                </Modal>
                <div className='border-to-selling'>
                    DO YOU WANT TO SELL?
                </div>
            </div>
            <div className='setion-selling'>
                <div className='buyers-sellers-wrapper'>
                    <div className='selling-image'>
                            <img src='images/selling.jpg' alt='' />
                        </div>
                    <div className='selling-article'>
                        <h2 className='buying-selling-text'>LIST WITH US</h2>
                        <div className='buying-selling-paragraph'>
                            <span className='buying-selling-paragraph-bold'>Selling your home can be an emotional and challenging process, especially in today’s dynamic marketplace.</span> With over 60 years of combined experience in luxury real estate transactions, the Eric Moreland and his associates understand the unique challenges and subtleties of the Austin real estate market.
                        </div>
                        <div className='buying-selling-paragraph'>
                            With a proven track record for success, our team is here to provide concierge service and guide you through every step of the sales process. Let us custom tailor a marketing program specific to your property.  <span className='buying-selling-paragraph-bold'>With our extensive network, effective marketing strategies and proprietary tools and resources support getting your home sold quickly and profitably.</span>
                        </div>
                       <button onClick={() => setModalIsOpen(true)} className='transfer-to-popup'>HELP ME SELL</button>
                         
                    </div>
                    
                </div>
               
            </div>
        </div>
</div>
    
        
    )
}

export default Buyers