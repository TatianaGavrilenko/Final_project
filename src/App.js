import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import Header from './Components/Header'
//import Nav from './Components/Nav';
//import Slider from './Components/Slider';
import About from './Components/About'
import Services from './Components/Services/Services'
import Buyers from './Components/Services/Buyers'
//import Sellers from './Components/Services/Sellers'
import Property from './Components/Property/Property'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer';

function App() {

  return (
    /*<BrowserRouter>
    <div className='realtor-page'>
      <Header />
      <Slider />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
          <Route path='/property' component={Property} />
          <Route path='/contact-us' component={ContactUs} />
    </div>
   
   
    </BrowserRouter>
  );*/
  <Router>
    <Fragment>

    <Route exact path='/'>
            <About
                  // wordsOnLibrary={wordsOnLibrary}
            />
    
       </Route>
    
       <Route path='/property' component={Property} />
       <Route path='/services' component={Services} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/buy-sell' component={Buyers} />
    
    
      <Footer />
    </Fragment>
  </Router>
  )
}

export default App;
