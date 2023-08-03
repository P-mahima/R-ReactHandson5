import React from 'react';
import './App.css';
import HigherComponent from './HigherComponent'

const ClickComponent = ({count, add}) => {
  return (
    <div>
        <h1 className='main'>HigherOrder:{count}</h1>
        <h2 className='information'>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</h2>
        <br/> 
        <button className='button' onClick={add}>Click me</button>


    </div>
  )
}

export default HigherComponent(ClickComponent)