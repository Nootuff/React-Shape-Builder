import React, { Component } from 'react'


class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value //This syntax is called "computed property names", it allows the handleChange function to be used for all inputs, it requires the input to have a name & the name must be the same as the bit of the state you are looking to update, this setstate changes the value of the state in name to the value in the input that uses this function onchange when the name in the input and state match. 
    });
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
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