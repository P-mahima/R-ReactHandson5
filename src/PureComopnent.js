import React from 'react';
import './App.css';

const PureComopnent = () => {
  return (
    <div className='space'>
      <h2>PureComponent is similar to Component but it skips re-renders for same props and state.</h2>
    </div>
  )
}

export default PureComopnent