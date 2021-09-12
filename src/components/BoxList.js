import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


class BoxList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boxes: [{ width: 10, height: 20, backgroundColor: "yellow" }, { width: 20, height: 30, backgroundColor: "green" }]
    };
  }
  render() {
    const boxes = this.state.boxes.map(value => //Map over the array of objects in "boxes" in state value is the paremeter, for each object in boxes, render a Box component. 
      <Box
        width={value.width}
        height={value.height}
        backgroundColor={value.backgroundColor}
      />
    )

    return (
      <div className="">
        <h2>Box Maker</h2>
        <NewBoxForm />
        {boxes}       
      </div>
    )
  }
}


export default BoxList;
