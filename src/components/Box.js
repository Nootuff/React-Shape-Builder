import React, { Component } from 'react'

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.destroyerFunc(this.props.id); //Passes current box.id value back up to BoxList to be entered into the remove func. destroyerFunc is the property this function was passed in under. 
  }

  render() {
    return (
      <div>
        <div style={{ /*The css styles of this div */
          height: this.props.height + "em",
          width: this.props.width + "em",
          backgroundColor: this.props.backgroundColor
        }}>
        </div>
        <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}


export default Box