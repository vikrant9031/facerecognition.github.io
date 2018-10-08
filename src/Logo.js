import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from'./main.png';
const Logo=()=>{
	return (
		<div className='ma4 mt0'>
		  <Tilt className="Tilt" options={{ max : 760}} style={{ height: 100, width: 130,borderRadius:40}}  >
            <div className="Tilt-outer"><img  style={{ height:100, width:130 ,borderRadius:40}}src={brain} alt="l"/></div>
         </Tilt>
	  </div>
		);
}
export default Logo;