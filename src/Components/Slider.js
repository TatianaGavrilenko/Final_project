import React, { useEffect, useState }  from 'react';
import '../css/Slider.css';
import ImgSlider from './ImgSlider';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';
import s4 from '../images/s4.jpg';
import s5 from '../images/s5.jpg';


function Slider(){

    let sliderArrImg = [<ImgSlider src={s1}/>, <ImgSlider src={s2}/>,<ImgSlider src={s3}/>,<ImgSlider src={s4}/>,<ImgSlider src={s5}/>];
    const [slide, setSlide] = useState(0);

    const prev = () => {
        slide === 0 ? setSlide(-100* (sliderArrImg.length - 1)) : setSlide(slide+100);
    };
    const next = () => {
        slide === -100* (sliderArrImg.length - 1) ? setSlide(0) : setSlide(slide-100);
    };

    useEffect(() =>{
        const interval = setInterval(() => {
           slide === -100 * (sliderArrImg.length - 1) ? setSlide(0) : setSlide(slide-100);
        }, 4000);
        return () => clearInterval(interval)
    }, [slide,  sliderArrImg.length]);

    return(
        <div className='slider'>
           {sliderArrImg.map((item, index) => {
                   return(
                       <div key={index} className='slide' style={{transform: `translateX(${slide}%)`}}>
                           {item}
                       </div>
                   )
               })
           }
           <div className='slider-buttons'>
                <button className='prev' onClick={prev}><i className="fas fa-chevron-left"></i></button>
                <button className='next' onClick={next}><i className="fas fa-chevron-right"></i></button>
           </div>
        </div>
    )
}

export default Slider;



/*class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            imageIndex: 0
        }
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }

    componentDidMount() {
        this.changeSlide()
    }
    
    /*shiftSlide () {
        setTimeout(() => {
            this.setState({
                imageIndex: this.state.imageIndex < this.state.images.length - 1 ? this.state.imageIndex + 1 : 0
            })
            this.shiftSlide()
        }, 2000)
    }
    */

    /*prev (){
        if(this.state.imageIndex <= 0) this.state.imageIndex = this.state.images.length;
        this.state.imageIndex --;
        return this.changeSlide();
    }

    next () {
        if (this.state.imageIndex >=this.state.images.length - 1) this.state.imageIndex = -1;
        this.state.imageIndex++;
        return this.changeSlide();
    }

    changeSlide () {
        setTimeout(() => {
            this.setState({
                imageIndex: this.state.imageIndex < this.state.images.length - 1 ? this.state.imageIndex + 1 : 0
            })
            this.changeSlide()
        }, 5000)
        const slider_img = document.querySelector('.img_slide')
        return slider_img.setAttribute('src', 'images/' + this.state.images[this.state.imageIndex]);
    }

    render(){
        
        return(
            
        <div className="img-slider" id='/'>
        <img src="images/1.jpg" alt="" className="img_slide"/>
            {/*<div className='buttons-slider'>
                <button onClick={this.next} className="slider-navigation next">Next</button>
                <button onClick={this.prev} className="slider-navigation prev">Prev</button>
            </div>}
        </div>
        )
    }
}*/

