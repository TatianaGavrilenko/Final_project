import React, {Component} from 'react'
import '../css/ContactUs.css';

export default class ContactUs extends Component {
    render(){
        return(
            <div className='contact' id='contact-us'>
               <div className='container-main'>
                    <h2>Get In Touch</h2>
                    <p className='contact-us-paragraph'>We would love to hear from you!</p>
                    <p className='contact-us-paragraph'> Send us a message and we’ll get right back in touch.</p>
                    <form method="post"> 
                        <div className='contact-fields'>
                            <input type='text' placeholder='First Name'/>
                            <input type='text' placeholder='Last Name'/>
                            <input type='email' placeholder='E-mail'/>
                            <input type='phone' placeholder='Phone'/>
                        </div>
                        <div className='message-field'>
                            <input type='phone' placeholder='Subject' required/>
                            <textarea placeholder="Message*" name="message" maxLength="500"></textarea>
                        </div>
                    </form>
                    <button className="button_message" type="submit">Submit</button>
                </div>
            </div>
        )
    }
}

/*const ContactUs = () => {
    return (
        <div className='contact' id='contact-us'>
           Contact Us

           <div>mdkdmvkms</div>
           <div>mdkdmvkms</div>
           <div>mdkdmvkms</div>
           <div>mdkdmvkms</div>
           <div>mdkdmvkms</div>
           <div>mdkdmvkms</div>
           bkrmbk


           mbkrmb;e
           mkfrmeg
           gerlgkrelg
           rgmrkmge
           mrkmgk;er
           rek
        </div>
    )
}

export default ContactUs*/