import React from 'react';
import NewFriendForm from './NewFriendForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      showOptions:false
    }
    this.formHelper = this.formHelper.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(event){
    event.preventDefault();
  }

  
  render() {
    let _name = null;
    let _type = null;
    return(
      <div>
        <h1>FOODAGATCHI</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='number'>How many friends would you like?</label>
          <select id='number' onChange={this.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </form>

        <div>
          <form onSubmit={this.handleSubmit}>
            {this.formHelper().map((el, index) =>
              <NewFriendForm 
                name={input => _name = input}
                type={select => _type = select}
                key={index}/>
            )}
            <button type="submit">Start Game</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;

