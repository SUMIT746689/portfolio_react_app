import React from 'react';

function Support({support}) {
  console.log(support)
    return(
      <div>
        <h3>{support.name}</h3>
        <p>{support.text}</p>
      </div>
  )}

export default Support;
