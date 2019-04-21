import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';

import Weather from './components/Weather';

const API_KEY = "6eb1180161eccb06843669dbee0f87b3";

class App extends Component {
state = {
  temperature : undefined,
  city : undefined,
  country:undefined,
  humidity : undefined,
  description : undefined,
  error:undefined
}

  getWeather = async(e)=>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await API_CALL.json() ;
if (city&& country)
{
  console.log(data);
  this.setState({temperature:data.main.temp,city:data.name,country:data.sys.country,humidity:data.main.humidity,description:data.weather[0].description,error:""});


}
else 
{
  this.setState({temperature:undefined,city:undefined,country:undefined,humidity:undefined,description:undefined,error:"Please enter the values"});

}
  }
  render() {
   


    return (
      <div>
 <div className="wrapper">
   <div className="main">
     {/* <div className="container"> */}
     <div className="row">
      <div className="col s5 title-container">
      <Title/>
      </div>
      <div className="col s7 form-container">

    <Form getWeather={this.getWeather}/>
    <Weather temperature={this.state.temperature} 
    city={this.state.city}
    country={this.state.country}
    humidity = {this.state.humidity}
    description={this.state.description}
    error = {this.state.error}
    />

      </div>
     </div>
     </div>
   {/* </div> */}
 </div>
    </div>
    );
  }
}

export default App;
