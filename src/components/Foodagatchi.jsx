import React from 'react';
import PropTypes from 'prop-types';
import onigiri from '../assets/images/onigiri.png';
import dumpling  from '../assets/images/dumpling.png';
import sushi from '../assets/images/sushi.png';
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
  var sushiEyeStyle = {
    position: 'absolute',
    top: '32%',
    left: '60%'
  };
  var foodagatchiStyle = {
    textAlign: 'center',
    maxWidth: '500px'
  };

  function gotchiBody(bodyType){
    switch (bodyType) {
    case 'dumpling':
      return {
        type: dumpling,
        style: eyeStyle
      };

    case 'sushi':
      return {
        type: sushi,
        style: sushiEyeStyle
      };
    
    default:
      return {
        type: onigiri,
        style: eyeStyle
      };
    }
  }


  return(
    <div style={foodagatchiStyle}>
      <h1>{props.name}</h1>
      <div style={bodyStyle}>
        <div style={gotchiBody(props.img).style}>
          <Eyes 
            emotion = {props.emotion} />
        </div>
        <img src = {gotchiBody(props.img).type} onMouseOver={() => props.onPets(props.id)}/>
      </div>
      <div className='buttons'>
        <button 
          className='feed' 
          type='button'
          onClick={() => props.onFeedClick(props.id)}>
          Feed
        </button>
        <button 
          className='bedTime' 
          type='button'
          onClick={() => props.onBedtimeClick(props.id)}>
          Put to Bed
        </button>
      </div>
    </div>
  );
}

Foodagatchi.propTypes={
  id: PropTypes.number,
  name: PropTypes.string,
  emotion: PropTypes.string,
  onFeedClick: PropTypes.func,
  onBedtimeClick: PropTypes.func,
  onPets: PropTypes.func,
  img: PropTypes.string
};

export default Foodagatchi;