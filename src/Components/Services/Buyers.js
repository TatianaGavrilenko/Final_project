import React, {useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../css/Buyers.css';
import MenuHam from '../Nav/MenuHam';
import Aos from 'aos';
import 'aos/dist/aos.css';
import buyerImg from '../../images/buyer-img.jpg';
import sellingImg from '../../images/selling.jpg';

Modal.setAppElement('#root')

const Buyers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if(isValid){
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }
    }

    const validation = () =>{
        let firstNameError = '';
        let lastNameError = '';
        let emailError ='';
        let phoneError = '';
        let messageError = '';
        let isValid = true;

        if(!firstName){
            firstNameError = 'Please introduce yourself';
            isValid = false;
        }

        if(!lastName){
            lastNameError = 'What is your last name?';
            isValid = false;
        }

        if (!email) {
            emailError = 'Please enter your email';
            isValid = false;
      
        } else if(!email.includes('@')){
            emailError = 'Invalid email address';   
            isValid = false;
        }
        

        if (phone !== 'undefined') {

            let phoneValid = /^[0-9\b]+$/;
          
            if(!phone){
                phoneError = 'Please enter your number';
                isValid = false;
            }else if (!phone.match(phoneValid)) {
                phoneError = 'Please enter only number';
                isValid = false;
            } else if(phone.length !== 11){
                phoneError = 'Please enter valid phone number';     
                isValid = false;     
            }
        }

          if(!message){
            messageError = 'What subject are you interested in?';
            isValid = false;
        } else if(message.length <= 10){
            messageError = 'What subject are you interested in?';     
            isValid = false;     
        }

        setFirstNameError(firstNameError);
        setLastNameError(lastNameError);
        setEmailError(emailError);
        setPhoneError(phoneError);
        setMessageError(messageError);

        return (isValid);
    }

    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
    <div className='buyers-sellers' id='buy-sell'>
        <MenuHam />
        <div className='container-main'>
            <div className='section-buying'>
                <div className='buyers-sellers-wrapper'>
                    <div className='buying-article' data-aos='fade-in'>
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
                        <button onClick={() => setModalIsOpen(true)} className='transfer-to-popup'>HELP ME BUY</button>
                    </div>
                    <div className='buying-image' data-aos='zoom-in'>
                        <img src={buyerImg} alt='' />
                    </div>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div className='popup-contact'>
                    <div className='container-main'>
                        <div className="popup-contact-form-wrapper">
                        <div>
                            <button className='popup-close-btn' onClick={() => setModalIsOpen(false)}>X</button>
                        </div>
                        <div className='popup-top-logo'>
                                <div className='k'>
                                Katerina
                                </div>
                                <div className='h'>
                                Gavrilenko
                                </div>
                        </div>
               
                        <form method='post' > 
                            <div className='popup-contact-fields'>
                                <div style={{color:'red', fontSize: '16px'}}>{firstNameError}</div>
                                <input className='form-modal firstName' type='text' placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                                <div style={{color:'red', fontSize: '16px'}}>{lastNameError}</div>
                                <input className='form-modal' type='text' placeholder='Last Name'  value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                                <div style={{color:'red', fontSize: '16px'}}>{emailError}</div>
                                <input className='form-modal' type='email' placeholder='E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                <div style={{color:'red', fontSize: '16px'}}>{phoneError}</div>
                                <input className='form-modal' type='phone' placeholder='Phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                            </div>
                            <div className='popup-message-field'>
                                <div style={{color:'red', fontSize: '16px'}}>{messageError}</div>
                                <textarea  className='form-modal' placeholder='Message' name='message' maxLength='500' value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
                            </div>
                        </form>
                        <button onClick={(e) =>  onSubmit(e)} className='popup_button_message' type='submit'>Submit</button>
                        </div>
                    </div>
                    </div>
                </Modal>
                <div className='border-to-selling'>
                    DO YOU WANT TO SELL?
                </div>
            </div>
            <div className='setion-selling' data-aos='fade-in'>
                <div className='buyers-sellers-wrapper'>
                    <div className='selling-image' data-aos='zoom-in'>
                            <img src={sellingImg} alt='' />
                        </div>
                    <div className='selling-article'>
                        <h2 className='buying-selling-text'>LIST WITH US</h2>
                        <div className='buying-selling-paragraph'>
                            <div className='buying-selling-paragraph-bold'>Selling your home can be an emotional and challenging process, especially in today’s dynamic marketplace.</div> <br/>With over 60 years of combined experience in luxury real estate transactions, the Eric Moreland and his associates understand the unique challenges and subtleties of the Austin real estate market.
                        </div>
                        <div className='buying-selling-paragraph'>
                            With a proven track record for success, our team is here to provide concierge service and guide you through every step of the sales process. Let us custom tailor a marketing program specific to your property.  <div className='buying-selling-paragraph-bold'>With our extensive network, effective marketing strategies and proprietary tools and resources support getting your home sold quickly and profitably.</div>
                        </div>
                       <button onClick={() => setModalIsOpen(true)} className='transfer-to-popup'>HELP ME SELL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Buyers;