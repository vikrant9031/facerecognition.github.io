import React from 'react';
const Navigation=({onRouteChange})=>{
	return (
		<nav style={{display:'flex' ,justifyContent:'flex-end'}}>
		<p onClick ={()=>onRouteChange('signin')} className='f3 link dim white   pa3 pointer'>Signout</p>
		</nav>
		);
}
export default Navigation;