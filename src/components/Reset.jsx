import React, { Component } from "react";

class Reset extends Component {
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  };

  render() {
    return (
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onResetDefault}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;
