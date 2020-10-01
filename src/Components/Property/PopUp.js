import React, { Component } from 'react';
import '../../css/Property.css';


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
