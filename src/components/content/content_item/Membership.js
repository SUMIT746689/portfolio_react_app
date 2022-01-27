import React from 'react';

function Membership({state}){
    
    console.log(state);
  return(
    <div>
        <p>{state.name}</p>
        <h3>${state.price}/mo</h3>
        <button >Buy Now</button>
    </div>
  )
}

export default Membership;
