import React, { Component } from "react";
import "../style/Borne.css";

export default class Borne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      recharges: this.props.recharegs,
    };
  }

  render() {
    return (
      <div className="div-principal-borne">
        <text>
          {this.state.lat}, {this.state.lng}
        </text>
      </div>
    );
  }
}
