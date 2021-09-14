import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [] //All created boxes will be stored in here. 
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(createdBox) {
    this.setState({
      boxes: [...this.state.boxes, createdBox] //This setState sets the value of the boxes array to be its existing value + everything in const newBox being passed from NewBoxForm which is entered as the createdBox argument.
    })
  }

  remove(passedId) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== passedId) //Set the current state to a new array created by filter consisting of boxes with ids NOT equalling the id that was passed in as an argument (passedId) from the handleDelete function in Box. Filter Iterates through all the objects in the "boxes" array in state and Makes a new array of the boxes who did not contain the id that was send from handleDelete and passed in. 
    });
  }

  render() {
    const boxes = this.state.boxes.map(value => //Map over the array of objects in "boxes" in state, "value" is the paremeter, for each object in boxes, render a Box component. 
      <Box
        key={value.id} //Each child in a list should have a unique "key" prop. This is being generated by uuid & passed from NewBoxForm, this is this boxes key.
        id={value.id} //The exact same value as "key" up above, for some reason "key" can't actually be used in the Box component & so this prop must be passed in addition to be accessed as the id prop in Box. 
        width={value.width}
        height={value.height}
        backgroundColor={value.backgroundColor}
        destroyerFunc={this.remove} //Passing the function so it can be used in the Box.
      />
    )

    return (
      <div className="">
        <h2>Box Maker</h2>
        <NewBoxForm creatorFunc={this.create} /> {/*Passing the create function above to the component as a prop so it can be used in that form.*/}
        {boxes}
      </div>
    )
  }
}


export default BoxList;
