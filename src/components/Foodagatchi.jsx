import React from 'react';
import onigiri from '../assets/images/onigiri.png';
import PropTypes from 'prop-types';
import Eyes from './Eyes';

function Foodagatchi(props) {
  var bodyStyle = {
    position: 'relative',
    textAlign: 'center'
  };
  var eyeStyle = {
    position: 'absolute',
    top: '29%',
    left: '36%'
  };
  var foodagatchiStyle = {
    textAlign: 'center',
    maxWidth: '500px'
  };


  return(
    <div style={foodagatchiStyle}>
      <h1>{props.name}</h1>
      <div style={bodyStyle}>
        <div style={eyeStyle}>
          <Eyes 
            emotion = {props.emotion} />
        </div>
        <img src = {onigiri} onMouseOver={props.onPets}/>
      </div>
      <div className='buttons'>
        <button 
          className='feed' 
          type='button'
          onClick={props.onFeedClick}>
          Feed
        </button>
        <button 
          className='bedTime' 
          type='button'
          onClick={props.onBedtimeClick}>
          Put to Bed
        </button>
      </div>
    </div>
  );
}

Foodagatchi.propTypes={
  name: PropTypes.string,
  emotion: PropTypes.string,
  onFeedClick: PropTypes.func,
  onBedtimeClick: PropTypes.func,
  onPets: PropTypes.func
};

export default Foodagatchi;