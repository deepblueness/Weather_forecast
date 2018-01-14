import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data) { 
    
 return (data.reduce((acc, cur) => acc + cur)/data.length).toFixed(2);
}

export default (props) => {
    return(
    <div> 
    <Sparklines width={250} height={200} limit ={25} data={props.data}> 
        <SparklinesLine color={props.colour}> </SparklinesLine>
        <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div> Avg: {average(props.data)} {props.units} </div>
    </div>
    )
}