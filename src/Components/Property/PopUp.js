import React, { Component } from 'react';
import '../../css/Property.css';

//import images from '../../images';
//import {NavLink} from "react-router-dom";


class PopUp extends Component {
    
    render(){
        
        return (
            <div className='popupParent'>
                <div className='popupImage'>
                    <button className='imgClose-btn' onClick={this.props.closePopup}>X</button>
                    <img src={this.props.popupImage} alt=''/>
                </div>
            </div>
        )
    }
}

export default PopUp;
