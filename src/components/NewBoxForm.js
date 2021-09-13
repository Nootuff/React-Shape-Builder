import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 


class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { //This function is used with the inputs, it activates on every change, updating the state in real time as the user types. What they type is uploaded to state in real time. 
    this.setState({
      [event.target.name]: event.target.value //This syntax is called "computed property names", I don't understand how it works, it allows the handleChange function to be used for all inputs, it requires the input to have a name & the name must be the same as the bit of the state you are looking to update, this setstate changes the value of the state in name to the value in the input that uses this function onchange when the name in the input and state match. 
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //This method needs to be here to prevent the page reloading on form submit like it normally does as this would wipe the slate clean. 
    const newBox = {...this.state, id: uuidv4()}//This const holds everything in the state, all 3 values. It also includes a unique identifying number created by uuidv4 from uuid up above. both are passed to the creatorFunc to be passed back to BoxList. 
    
    this.props.creatorFunc(newBox); //creatorFunc is the "create" function from BoxList passed in as a prop, this components' entire state has been passed in as an argument through newBox because... it is being passed back to BoxList? Looks like the  state that is updated as the user types with handleChange is passed back up to BoxList to be used in the create function there to ceate a new box with the values specified in this form. 
    this.setState({height: "", width: "", backgroundColor: ""}); //Clears the form by setting state back to its defaults. 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> {/*When form data submitted, handleSubmit activates.*/}
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height" /*Name must be the same as state value the input is meant to update.*/
            value={this.state.height} /*The text within the input IS the state, this is what's displaying in the input as you type.*/
            id="height"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            id="width"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="text"
            name="backgroundColor"
            value={this.state.backgroundColor}
            id="backgroundColor"
            onChange={this.handleChange}
          />
        </div>
        <button>Construct box</button>
      </form>
    )
  }
}


export default NewBoxForm