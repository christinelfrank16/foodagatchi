import React from 'react';
import Foodagatchi from './Foodagatchi';
import Moment from 'moment';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pets: [
        {
          name: 'Fred',
          emotion: 'happy',
          timeBeforeFeed: 10,
          timeBeforePets: 15,
          timeBeforeSleep: 23
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

  handleBedtimeClick(){
    let newPetsList = this.state.pets.slice();
    newPetsList[0].timeBeforeSleep = 23;
    newPetsList[0].emotion = 'sleeping';
    this.setState({pets: newPetsList});
  }

  handleFeedClick(){
    let newPetsList = this.state.pets.slice();
    newPetsList[0].timeBeforeFeed = 10;
    this.setState({pets: newPetsList});
  }

  handlePets(){
    let newPetsList = this.state.pets.slice();
    newPetsList[0].timeBeforePets = 15;
    this.setState({pets: newPetsList});
  }

  render(){
    return (
      <div>
        <Foodagatchi
          name={this.state.pets[0].name} 
          emotion={this.state.pets[0].emotion} 
          onFeedClick={this.handleFeedClick} 
          onBedtimeClick={this.handleBedtimeClick}
          onPets={this.handlePets}/>
      </div>
    );
  }
}

export default App;