import React, { Component } from "react";

class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }

  render() {
    return (
      <div className="card bg-white">
        <div className="card-header">
          <h3 className="card-title">Size : {this.props.fontSize}px</h3>
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(-2)}
          >
            Giảm
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(2)}
          >
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
