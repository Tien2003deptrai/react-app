import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#ccc"],
    };
  }

  showColor(color) {
    return {
      backgroundColor: color,
    };
  }

  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }

  render() {
    var eleColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });

    return (
      <div className="col-lg-6">
        <div className="card bg-white">
          <div className="card-header">
            <h3 className="card-title">Color Picker</h3>
          </div>
          <div className="card-body">
            {eleColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
