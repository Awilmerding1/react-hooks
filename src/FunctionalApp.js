import React, { useState, useEffect } from 'react';
import useDocumentTitle from './UseDocumentTitle'

const FunctionalApp = () => {

  const [count, setCount] = useState(0)

  const myFunc = () => {
    console.log("change in count")
  }

  useEffect(myFunc, [count]);


  useDocumentTitle(count)

    return (
      <div style={{textAlign: 'center', marginTop: '30px', fontSize: '50px'}}>
        {count}<br/>
        <button style={{fontSize: '20px'}} onClick={() => setCount(count - 1)}> - </button>
        <button style={{fontSize: '20px'}}onClick={() => setCount(count + 1)}> + </button>
      </div>
    );


}

export default FunctionalApp;
