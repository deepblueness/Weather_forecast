import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'



class WeatherList extends Component{
     renderWeather(cityData) {
         const name = cityData.city.name
         const temps = cityData.list.map(weather => weather.main.temp -273,15) //it comes in kelvin from the api
         const pressures = cityData.list.map(weather => weather.main.pressure) 
         const humidities = cityData.list.map(weather => weather.main.humidity) 
         const {lon, lat} = cityData.city.coord;
         
       
         return(
            <tr key = {name}>
            <td><GoogleMap lon={lon} lat ={lat}/></td>
            <td><Chart data={temps} colour="green" units="°C"/></td>
            <td><Chart data={pressures} colour="blue" units="kPa"/></td>
            <td><Chart data={humidities} colour="gray" units="%"/></td> 
            </tr>
         )
         
        
    }
    render() {
        return (
            <div>
            <table className = "table table-hover">
                <thead><tr> 
                    <th> City </th>
                    <th> Temperature (°C)</th>
                    <th> Pressure (kPa)</th>
                    <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            </div>
        )
    }
}

function mapStateToProps({weather}){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)