import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class GoogleMap extends Component{
    
    componentDidMount(){
        const node = ReactDOM.findDOMNode(this.refs.map)
        new google.maps.Map(node, {
            zoom: 12,
            center: {
               lat: this.props.lat,
               lng: this.props.lon
            }
        })
    }
   render(){
       return <div className = "google-map" ref="map"/> 
   }

   
}

export default GoogleMap