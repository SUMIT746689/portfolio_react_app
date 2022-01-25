import React from 'react';

function Membership({state}){
    
    console.log(state);
  return(
    <div>
        <button style={{backgroundColor:'red'}}>Buy Now</button>
        <p>{state.name}</p>
        <h1>${state.price}/mo</h1>
    </div>
  )
}

export default Membership;
