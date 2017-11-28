import React, { Component } from 'react';
import './App.css';
import Profile from './component/Profile';
import Form from './component/FormInput'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class App extends Component {
// Set Initial State
state = {
  firstName: 'Jessica',
  lastName: 'Cho',
  imageURL: 'https://randomuser.me/api/portraits/women/17.jpg',
  edit: false
}

// When the first name changes
onChangeFirstName = (event) => {
  if (this.state.edit === true){
    console.log('First name changed!');
    const input = event.target;
    const newFirstName = input.value;
    this.setState(prevState => ({
      firstName: newFirstName
    }))
  }

}

onChangeLastName = (event) => {
  if (this.state.edit === true){
    console.log('Last name changed!');
    const input = event.target;
    const newLastName = input.value;
    this.setState(prevState => ({
      lastName: newLastName
    }))
  }
}

onChangeImageURL= (event) => {
  if (this.state.edit === true){
    console.log('Image URL changed!');
    const input = event.target;
    const newImageURL = input.value;
    this.setState(prevState => ({
      imageURL: newImageURL
    }))
  }
}

onChangeEdit= (event) => {
  this.setState(prevState => ({
    edit: !prevState.edit
  }))
}

onChange = (event) => {
   this.setState({
     [ event.target.name ]: event.target.value
   });
 }

randomize= () => {
  const url = 'https://randomuser.me/api/';
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let newFirstName = capitalizeFirstLetter(data.results[0].name.first);
      let newLastName = capitalizeFirstLetter(data.results[0].name.last);
      let newImageURL = data.results[0].picture.large;
      this.setState({
        firstName: newFirstName,
        lastName: newLastName,
        imageURL: newImageURL
      });
    })
}

// Render our component
  render() {

    // grab the first name, last name and image URL
    const { firstName, lastName, imageURL, edit} = this.state;
    return (
      <div className="App">
        <Profile
          firstName={ this.state.firstName }
          lastName= { this.state.lastName }
          imageURL= { this.state.imageURL } />
          { edit && (
            <label>
              <Form firstName={firstName} lastName={lastName} imageURL={imageURL} onChange= {this.onChange} />
            </label>
          )}
          <button onClick={ this.onChangeEdit }>Edit Profile</button><br />
          <button onClick={ this.randomize }>Random</button><br />
      </div>
    );
  }
}

export default App;
