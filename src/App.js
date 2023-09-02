import React, { Component } from "react";
import "./App.css";
import Reset from "./components/Reset.jsx";
import SizeSetting from "./components/SizeSetting.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import Result from "./components/Result.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);

  }

  onSetColor = (params) => {
    this.setState({ color: params });
  };

  onChangeSize = (value) => {
    this.setState({
      fontSize:
        this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36
          ? this.state.fontSize + value
          : this.state.fontSize,
    });
  };

  onSettingDefault(value) {
    if (value) {
      this.setState({ color: "red", fontSize: 15 });
    }
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <div className="col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
        </div>
        <div className="row">
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
