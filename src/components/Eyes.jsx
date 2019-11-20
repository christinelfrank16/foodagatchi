import React from 'react';
import PropTypes from 'prop-types';
import grumpy from '../assets/images/grumpy.png';
import happy from '../assets/images/happy.png';
import lovey from '../assets/images/lovey.png';
import sad from '../assets/images/sad.png';
import sleeping from '../assets/images/sleeping.png';

function Eyes(props) {
  var imageName = '';
  switch (props.emotion) {
  case 'sad':
    imageName = sad;
    break;
    
  case 'grumpy':
    imageName = grumpy;
    break;

  case 'lovey':
    imageName = lovey;
    break;

  case 'sleeping':
    imageName = sleeping;
    break;

  default:
    imageName = happy;
    break;
  }
  return (
    <div>
      <img src = {imageName}/>
    </div>
  );
}

Eyes.propTypes = {
  emotion: PropTypes.string
};

export default Eyes;