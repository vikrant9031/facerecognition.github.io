import React from 'react';

const ImageLinkForm=({onInputChange,onSubmit})=>{
	return (
		<div >
		<p className='f3' style={{color:'yellow'}}>{'This Magic Brain will detect faces in your pictures.Give it a try'}
		</p>
	  
	 <div className="main">
	  <input type='tex'className='f4 pa2 w-70 center' onChange={onInputChange}/>
	  <button className=' w-25 f6 link dim br-pill ph3 pv3  dib white bg-purple' onClick={onSubmit}>Detect</button>
	  </div>
	  </div>
		);
}
export default ImageLinkForm;