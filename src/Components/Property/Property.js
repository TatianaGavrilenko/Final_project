import React, { Component } from 'react';
import '../../css/Property.css';
import PopUp from './PopUp';
//import images from '../../images';
//import {NavLink} from "react-router-dom";


class Property extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: '',
            imagesArr1: [
                'images/house1_1.jpg', 'images/house1_2.jpg','images/house1_3.jpg','images/house1_4.jpg', 'images/house1_5.jpg'
            ],
            imagesArr2: [
                'images/house2.jpg', 'images/house2_2.jpg',  'images/house2_3.jpg',  'images/house2_4.jpg'
            ],
            imagesArr3: [
                'images/house3.jpg', 'images/house3_2.jpg','images/house3_3.jpg','images/house3_4.jpg'
            ],
            showModal: false
        }
    }

    closePopUp = (event) => {
        this.setState({
            showModal: !this.state.showModal,
            popupImage: event
        })
    }

    render(){
        let imagesArr1 = this.state.imagesArr1,
            imagesArr2 = this.state.imagesArr2,
            imagesArr3 = this.state.imagesArr3;
        const images1 = imagesArr1.map((event, index) => {
            return(
                <img className='singleImage' alt='Featured Houses'
                src={event}
                key={index}
                onClick = {() => this.closePopUp(event)}
                />
            )
        })
        const images2 = imagesArr2.map((event, index) => {
            return(
                <img className='singleImage' alt='Featured Houses'
                src={event}
                key={index}
                onClick = {() => this.closePopUp(event)}
                />
            )
        })

        const images3 = imagesArr3.map((event, index) => {
            return(
                <img className='singleImage' alt='Featured Houses'
                src={event}
                key={index}
                onClick = {() => this.closePopUp(event)}
                />
            )
        })


        return (
            <div className='section-property' id='/property'>
                <span className='property-header-h1'><h1 className='property-h1'>Featured Property</h1></span>
                <div className='container-main'>
                    <div className='portfolio-list'>
                        <div className='portfolio-item'>
                            <div className='wrapper'>
                                <h2 className='portfolio-h2'>67 BEVERLY PARK COURT BEVERLY HILLS, CA 90210</h2>
                                <p className='portfolio-p'>$160,000,000</p>
                            </div>
                                <div className='portfolio-img1'>
                                    {images1}
                                    {this.state.showModal ? (
                                        <PopUp 
                                        popupImage = {this.state.popupImage}
                                        closePopup = {this.closePopUp}
                                        />) : null}
                                </div>
                                <p className='portfolio-item-p'>
                                Authentic Italian village encompassing the largest assemblage in Beverly Park. On over nine acres, accessed by its own street, this one-of-a-kind property took over seven year to create. Expansive gates open to a 30 car courtyard surrounded by 40 foot tall Canary Island palms and a setting worthy of the best Italian palazzo. Inside the mansion, approximately 20,000 square feet afford every possible amenity from high ceilings to large and formal gathering areas to small and intimate spaces. A four plus acre backyard offers views to a pool with pool house, two-story guesthouse, tennis court, two bedroom guest house and a walking/jogging trail that surrounds the estate. A separate lot comes with possibilities for expansion or separate development. This is one of the finest estates ever offered in Beverly Hills.
                                </p>
                        </div>
                        <div className='portfolio-item'>
                            <div className='wrapper'>
                                <h2 className='portfolio-h2'>27930 PACIFIC COAST HIGHWAY, MALIBU, CA 90265</h2>
                                <p className='portfolio-p'>$115,000,000</p>
                            </div>
                                {images2}
                                {this.state.showModal ? 
                                        <PopUp 
                                        popupImage = {this.state.popupImage}
                                        closePopup = {this.closePopUp}
                                        /> : null}
                                <p className='portfolio-item-p'>
                                MardeAmorEstate.com Sea of Love Paradise Cove 12 Bed 14 Bath 10,646 SF 2.6 A Magnificent & timeless Architectural Modern compound on approximately 2.6 lush Oceanside acres. Impressive gated entry & long drive to large motor court sits this spectacular masterpiece w/ walls of glass. Powerful two Story Entry features a dramatic 18 ft floor to ceiling crystal chandelier, centered in a sweeping circular stairway in a backdrop of sheets of white walls & Bianco Carolina white marble floors. Open living, dining & bar room w/ seemingly endless floor to ceiling windows to infinity pool & beyond. Ocean, coastline & island vistas from each floor. Decks, patios, Zen walkways, greenery & intimate patios. Large private beach. The epitome of the resort lifestyle. Lavish sculptural elements, gorgeous materials, refined finishes, a site-specific design. Savant System fiber optics to beach. Avaya Phone system. Lutron Shades. 1600 AMPS to property. 400 AMPS to TC. EAST OF PARADISE COVE.                            </p>
                        </div>
                        <div className='portfolio-item'>
                            <div className='wrapper'>
                                <h2 className='portfolio-h2'>14801 PAMPAS RICAS, PACIFIC PALISADES, CA 9027</h2>
                                <p className='portfolio-p'>$14,995,000</p>
                            </div>
                                 {images3}
                                 {this.state.showModal ? 
                                        <PopUp 
                                        popupImage = {this.state.popupImage}
                                        closePopup = {this.closePopUp}
                                        /> : null}
                                <p className='portfolio-item-p'>
                                Brand new construction set in the coveted Huntington Palisades. This is not a spec home but rather an Owner/User's sophisticated masterpiece with unrivaled attention to detail & craftsmanship, which was the spirit & theme to this "no-budget" build. An 11,607 Sq.Ft. architectural statement set on a 15,027 Sq.Ft. corner lot with pool, spa, waterfall & detached pool cabana. 7-bedroom suites, 10-bathrooms, an opulent library/study, wet room, separate master suite office, 2,160-bottle temperature controlled wine rooms, Dolby Atmos movie-theater, elaborate Savant Pro home automation & game/recreational room. Facing the backyard with 40' of floor to ceiling Fleetwood doors, is a massive kitchen/great room with 16'x9' Dolby Atmos video wall & separate full functioning prep kitchen with service entrance. A one-of-a-kind custom home set in the cozy beach community of the Pacific Palisades, just steps to the village shopping, schools, movie-theater, restaurants, beach, bike path & hiking trails.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Property;

/*const Property = () => {

    return (
        <div className='section-property' id='/property'>
            <span className='property-header-h1'><h1 className='property-h1'>Featured Property</h1></span>
            <div className='container-main'>
                <div className='portfolio-list'>
                    <div className='portfolio-item'>
                        <div className='wrapper'>
                            <h2 className='portfolio-h2'>67 BEVERLY PARK COURT BEVERLY HILLS, CA 90210</h2>
                            <p className='portfolio-p'>$160,000,000</p>
                        </div>
                            <div className='portfolio-img1'>
                                <img src='/images/house1_1.jpg' alt=''></img>

                            </div>
                            <p className='portfolio-item-p'>
                            Authentic Italian village encompassing the largest assemblage in Beverly Park. On over nine acres, accessed by its own street, this one-of-a-kind property took over seven year to create. Expansive gates open to a 30 car courtyard surrounded by 40 foot tall Canary Island palms and a setting worthy of the best Italian palazzo. Inside the mansion, approximately 20,000 square feet afford every possible amenity from high ceilings to large and formal gathering areas to small and intimate spaces. A four plus acre backyard offers views to a pool with pool house, two-story guesthouse, tennis court, two bedroom guest house and a walking/jogging trail that surrounds the estate. A separate lot comes with possibilities for expansion or separate development. This is one of the finest estates ever offered in Beverly Hills.
                            </p>
                    </div>
                    <div className='portfolio-item'>
                        <div className='wrapper'>
                            <h2 className='portfolio-h2'>27930 PACIFIC COAST HIGHWAY, MALIBU, CA 90265</h2>
                            <p className='portfolio-p'>$115,000,000</p>
                        </div>
                            <div className='portfolio-img2'>

                            </div>
                            <p className='portfolio-item-p'>
                            MardeAmorEstate.com Sea of Love Paradise Cove 12 Bed 14 Bath 10,646 SF 2.6 A Magnificent & timeless Architectural Modern compound on approximately 2.6 lush Oceanside acres. Impressive gated entry & long drive to large motor court sits this spectacular masterpiece w/ walls of glass. Powerful two Story Entry features a dramatic 18 ft floor to ceiling crystal chandelier, centered in a sweeping circular stairway in a backdrop of sheets of white walls & Bianco Carolina white marble floors. Open living, dining & bar room w/ seemingly endless floor to ceiling windows to infinity pool & beyond. Ocean, coastline & island vistas from each floor. Decks, patios, Zen walkways, greenery & intimate patios. Large private beach. The epitome of the resort lifestyle. Lavish sculptural elements, gorgeous materials, refined finishes, a site-specific design. Savant System fiber optics to beach. Avaya Phone system. Lutron Shades. 1600 AMPS to property. 400 AMPS to TC. EAST OF PARADISE COVE.                            </p>
                    </div>
                    <div className='portfolio-item'>
                        <div className='wrapper'>
                            <h2 className='portfolio-h2'>14801 PAMPAS RICAS, PACIFIC PALISADES, CA 9027</h2>
                            <p className='portfolio-p'>$14,995,000</p>
                        </div>
                            <div className='portfolio-img3'>

                            </div>
                            <p className='portfolio-item-p'>
                            Brand new construction set in the coveted Huntington Palisades. This is not a spec home but rather an Owner/User's sophisticated masterpiece with unrivaled attention to detail & craftsmanship, which was the spirit & theme to this "no-budget" build. An 11,607 Sq.Ft. architectural statement set on a 15,027 Sq.Ft. corner lot with pool, spa, waterfall & detached pool cabana. 7-bedroom suites, 10-bathrooms, an opulent library/study, wet room, separate master suite office, 2,160-bottle temperature controlled wine rooms, Dolby Atmos movie-theater, elaborate Savant Pro home automation & game/recreational room. Facing the backyard with 40' of floor to ceiling Fleetwood doors, is a massive kitchen/great room with 16'x9' Dolby Atmos video wall & separate full functioning prep kitchen with service entrance. A one-of-a-kind custom home set in the cozy beach community of the Pacific Palisades, just steps to the village shopping, schools, movie-theater, restaurants, beach, bike path & hiking trails.                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property*/