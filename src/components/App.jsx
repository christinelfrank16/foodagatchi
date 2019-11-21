import React from 'react';
import Foodagatchi from './Foodagatchi';
import woodplateboard from '../assets/images/woodboardplate.png';
import Home from './Home';

import Moment from 'moment';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          name: 'Fred',
          emotion: 'happy',
          timeBeforeFeed: 45,
          timeBeforePets: 55,
          timeBeforeSleep: 80,
          img: 'onigiri'
        },
        {
          id: 2,
          name: 'Dumpy',
          emotion: 'happy',
          timeBeforeFeed: 45,
          timeBeforePets: 55,
          timeBeforeSleep: 80,
          img: 'wasabi'
        }
      ]
    };
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleBedtimeClick = this.handleBedtimeClick.bind(this);
    this.handlePets = this.handlePets.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(() => 
      this.updatePetProps(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  updatePetProps(){
    let newPetsList = this.state.pets.slice();
    newPetsList.forEach((pet) => this.managePetProps(pet));
    this.setState({pets: newPetsList});
  }
  
  managePetProps(pet){
    pet.timeBeforeFeed--;
    pet.timeBeforePets--;
    pet.timeBeforeSleep--;
    this.updateEmotion(pet);
  }


  updateEmotion(thisPet){
    if((thisPet.timeBeforeFeed < 10 || thisPet.timeBeforePets < 15) || thisPet.timeBeforeSleep < 15){
      thisPet.emotion = 'grumpy';
    }
    else if((thisPet.timeBeforeFeed < 20 || thisPet.timeBeforePets < 25) || thisPet.timeBeforeSleep < 30){
      thisPet.emotion = 'sad';
    } 
    else {
      thisPet.emotion = 'happy';
    }
    if(thisPet.timeBeforeFeed > 40 && thisPet.timeBeforePets > 48 && thisPet.timeBeforeSleep > 70){
      thisPet.emotion = 'lovey';
    }
  }

  handleBedtimeClick(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforeSleep = 80;
    pet.emotion = 'sleeping';
    this.setState({pets: newPetsList});
  }

  handleFeedClick(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforeFeed = 45;
    this.setState({pets: newPetsList});
  }

  handlePets(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforePets = 55;
    pet.emotion = 'lovey';
    this.setState({pets: newPetsList});
  }

  
  render(){
      var background = {
          backgroundImage: `url(${woodplateboard})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex'
      }
    return (
      <div style={background}>
       <Home/>
        {this.state.pets.map((pet) => 
          <Foodagatchi
            name={pet.name} 
            emotion={pet.emotion} 
            onFeedClick={this.handleFeedClick} 
            onBedtimeClick={this.handleBedtimeClick}
            onPets={this.handlePets}
            img={pet.img} 
            id={pet.id}
            key={pet.id}/>
        )}
      </div>
    );
  }
}

export default App;