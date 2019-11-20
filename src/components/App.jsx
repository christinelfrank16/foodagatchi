import React from 'react';
import Foodagatchi from './Foodagatchi';
import woodplateboard from '../assets/images/woodboardplate.png';
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
          timeBeforeFeed: 10,
          timeBeforePets: 15,
          timeBeforeSleep: 23,
          img: 'onigiri'
        },
        {
          id: 2,
          name: 'Dumpy',
          emotion: 'happy',
          timeBeforeFeed: 10,
          timeBeforePets: 15,
          timeBeforeSleep: 23,
          img: 'dumpling'
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
    if((thisPet.timeBeforeFeed < 3 || thisPet.timeBeforePets < 4) || thisPet.timeBeforeSleep < 5){
      thisPet.emotion = 'grumpy';
    }
    else if((thisPet.timeBeforeFeed < 6 || thisPet.timeBeforePets < 8) || thisPet.timeBeforeSleep < 10){
      thisPet.emotion = 'sad';
    } 
    else {
      thisPet.emotion = 'happy';
    }
    if(thisPet.timeBeforeFeed > 8 && thisPet.timeBeforePets > 12 && thisPet.timeBeforeSleep > 20){
      thisPet.emotion = 'lovey';
    }
  }

  handleBedtimeClick(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforeSleep = 23;
    pet.emotion = 'sleeping';
    this.setState({pets: newPetsList});
  }

  handleFeedClick(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforeFeed = 10;
    this.setState({pets: newPetsList});
  }

  handlePets(id){
    let newPetsList = this.state.pets.slice();
    const pet = newPetsList.find((pet) => pet.id === id);
    pet.timeBeforePets = 15;
    pet.emotion = 'lovey';
    this.setState({pets: newPetsList});
  }

  render(){
    return (
      <div>
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
        <img src={woodplateboard} />
      </div>
    );
  }
}

export default App;