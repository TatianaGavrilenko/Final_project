import React, {Component} from 'react';
import '../css/ContactUs.css';
import MenuHam from './Nav/MenuHam';

export default class ContactUs extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        phoneError: '',
        messageError: ''
    };
    

    validation = () => {
        let firstNameError = '';
        let emailError = '';
        let phoneError = '';
        let subjectError = '';

        if(!this.state.firstName){
            firstNameError = 'Please introduce yourself';
        }

        if (!this.state.email) {
            emailError = 'Please enter your email';
      
        } else if(!this.state.email.includes('@')){
            emailError = 'Invalid email address';          
        }
      
        if (this.state.phone !== 'undefined') {

            let phoneValid = /^[0-9\b]+$/;
          
            if(!this.state.phone){
                phoneError = 'Please enter your number';
          
            }else if (!this.state.phone.match(phoneValid)) {
                phoneError = 'Please enter only number';
            } else if(this.state.phone.length !== 11){
                phoneError = 'Please enter valid phone number';     
            }
        }
          

        if(!this.state.subject){
            subjectError = 'What subject are you interested in?';
        }

        if(emailError || firstNameError || subjectError || phoneError){
            this.setState({emailError, firstNameError, subjectError, phoneError});
            return false;
        }

        return  true;
    };

    onSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validation();
        if (isValid){
            console.log(this.state);
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                phoneError: '',
                subjectError: '',
            })
        }
    }

    render() {
        return(
            <div className='contact' id='contact-us'>
                <MenuHam />
               <div className='container-main'>
                    <h2>Get In Touch</h2>
                    <p className='contact-us-paragraph'>We would love to hear from you!</p>
                    <p className='contact-us-paragraph'> Send us a message and we’ll get right back in touch.</p>
                    <form method='post'> 
                        <div className='contact-fields input-contact'>
                            <div className='firstLine-contact'>
                                <input className='input-contact' value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value}) } type='text' placeholder='First Name'/>
                                <div className='contact-error'>{this.state.firstNameError}</div>
                            </div>
                            <div className='firstLine-contact'>
                                <input className='input-contact' value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value}) } type='text' placeholder='Last Name'/>
                                <div className='contact-error'>{this.state.lastNameError}</div>
                            </div>
                            <div className='firstLine-contact'>
                                <input className='input-contact phone' value={this.state.phone} onChange={e => this.setState({phone: e.target.value}) } type='phone' placeholder='Phone'/>
                                <div className='contact-error contact-error-phone'>{this.state.phoneError}</div>
                            </div>
                        </div>
                        <div className='message-field input-contact'>
                            <div className='secondLine-contact'>
                                <input className='input-contact input-email' value={this.state.email} onChange={e => this.setState({email: e.target.value}) } type='email' placeholder='E-mail'/>
                                <div className='contact-error'>{this.state.emailError}</div>
                            </div>
                            <div> 
                                <input className='input-contact' value={this.state.subject} onChange={e => this.setState({subject: e.target.value}) } type='text' placeholder='Subject' required/>
                                <div className='subject-error'>{this.state.subjectError}</div>
                            </div>
                            <div>
                                <textarea className='input-contact' value={this.state.message} onChange={e => this.setState({message: e.target.value}) } placeholder='Message' name='message' maxLength='500'></textarea>
                            </div>
                        </div>
                    </form>
                    <div className='btn-form'>
                        <button className='button_message'  onClick={event => this.onSubmit(event)} type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        )
    } 
}
