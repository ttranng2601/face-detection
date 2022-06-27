import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt>
	      		<div className="Tilt ba bw1 br-100 b--black shadow-10" style={{ height: '150px', width: '150px' }}>
	       			<img alt='logo' src={face} />
	      		</div>
	   	 	</Tilt>
		</div>
	);
}

export default Logo;