import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Services from './Components/Services/Services';
import Buyers from './Components/Services/Buyers';
import Property from './Components/Property/Property';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import API from './Components/API';



class App extends React.Component{

    render() {
      
      return (

      <Router>
        <Fragment>
          <Route exact path='/'>
                  <About />
                  <API  />
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
}

export default App;
