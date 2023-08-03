import React, { useState } from "react";
import './App.css';


const HigherComponent = (Increment) =>{
    const Ncomp =()=>{
        const [count, setcount] = useState(0);
        const adding =()=>{
            setcount(count+1);
        }
        return (<Increment count={count} add={adding} />)
    }
    return Ncomp
}
export default HigherComponent;