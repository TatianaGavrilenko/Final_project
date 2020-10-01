import React from 'react';
import '../css/API.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


 class API extends React.Component{
    
    sellHouse = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const beds = e.target.elements.state_code.value;
        const api_url = await fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&limit=30&city=${city}&state_code=${beds}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "2f3474695cmsh1bdef148d0dfa1cp1cbb64jsne8cc57bfbe07"
        }
      })

      const properties = await api_url.json();
      const data= properties;
      console.log(data)
      
      data.properties.forEach(function(item) {
      let house_result = document.querySelector('.list-items')
      let pElem = document.createElement('li');
      pElem.classList.add('list_name');
    
      let elemItems = `
        <a href= ' ${item.rdc_web_url}' target='_blank'>${item.address.city}  ${item.address.line}  ${item.address.postal_code}, ${item.address.state}</a><br/> Baths: ${item.baths}, beds: ${item.beds}, ${item.office.name}<br/>$${item.price}<br/>
        \n <img class='img-api' src=${item.thumbnail} /> `;
      pElem.innerHTML = elemItems;
                  
      house_result.appendChild(pElem);
      let element = document.querySelector('.houses-container');
      element.appendChild(house_result);
    })
  }

    
      deleteItem = (e) => {
        e.preventDefault()
        document.querySelector('.list-items').innerHTML ='';
        document.querySelector('.input-api').value = '';
        document.querySelector('.input-api-state').value = '';
      }

      componentDidMount(){
        Aos.init({ duration: 2000 });
      }

     render(){
   
         return(
             <div className='form-api' id='find-a-house'>
                 <div className='container-main'>
                    <form onSubmit={this.sellHouse} data-aos='flip-left' >
                        <h2 className='formHomeApi'>Find your dream House!<i className='fa fa-key' aria-hidden='true'></i></h2>
                        <div className='inputs'>
                            <input onChange={this.cleanInput} className='input-api' type='text' name='city' placeholder='Where do you want to live?' />
                            <input className='input-api-state' type='text' name='state_code' placeholder="State" />
                        </div>
                        <button className='btn-api' >Get a House</button>
                        <button className='btn-api remove' onClick={this.deleteItem}>Other place</button>
                    </form>
                     <div className='houses-container'>
                         <ul className='list-items'></ul>
                     </div> 
               </div>        
            </div>      
         )
     }
 }

export default API;