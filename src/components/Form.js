import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
      
       <div className="input-field col s12">
          <input placeholder="City" name="city" type="text" class="validate"/>

        </div>
        <div className="input-field col s12">
          <input placeholder="Country" name="country" type="text" class="validate"/>
          
        </div>   
            <button class="waves-effect waves-light btn red"><i class="material-icons left">cloud</i>Get Weather App</button>



      </form>
    )
  }
}
