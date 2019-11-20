import React from 'react';
import onigiri from '../assets/images/onigiri.png';
import PropTypes from 'prop-types';
import Eyes from './Eyes';

function Foodagatchi(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <Eyes 
      emotion = {props.emotion}/>
      <img src = {onigiri} />
        <div className='buttons'>
          <button className='feed' type='button'>
            Feed
          </button>
          <button className='bedTime' type='button'>
            Put to Bed
          </button>
        </div>
    </div>
  )
}

Foodagatchi.propTypes={
  name: PropTypes.string,
  emotion: PropTypes.string
}

export default Foodagatchi;