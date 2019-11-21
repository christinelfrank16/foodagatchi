import React from 'react';
import NewFriendForm from './NewFriendForm';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      showOptions:false
    }
    this.formHelper = this.formHelper.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStartGameSubmit = this.handleStartGameSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, showOptions:true});
  }

  formHelper() {
    var html = [];
    for(let i=0; i<this.state.value; i++){
    html.push(i);
    }
    return html;
  }
  handleCountSubmit(event){
    event.preventDefault();
  }

  
  handleStartGameSubmit(event, _name, _type){
    event.preventDefault();
    var friendHolder = [];
    _name.forEach((element, index) =>
    friendHolder.push({id: index, name: element.value, img: _type[index].value})
    );
    // props.onNewGameSubmit({name: ''})
    this.props.onStartGame(friendHolder)
  }
  
  render(props) {
    let _name = [];
    let _type = [];
    return(
      <div>
        <h1>FOODAGATCHI</h1>
        <form onSubmit={this.handleCountSubmit}>
          <label htmlFor='number'>How many friends would you like?</label>
          <select id='number' onChange={this.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </form>

        <div>
          <form onSubmit={() => {this.handleStartGameSubmit(event, _name, _type)}}>
            {this.formHelper().map((el, index) =>
              <NewFriendForm 
                name={input => _name.push(input)}
                type={select => _type.push(select)}
                key={index}/>
            )}
            <button type="submit">Start Game</button>
          </form>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  onStartGame: PropTypes.func
}

export default Home;

