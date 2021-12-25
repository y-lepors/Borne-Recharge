import React, { Component } from "react";
import "../style/Borne.css";

export default class Borne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idBorne: this.props.idBorne,
      lat: this.props.lat,
      lng: this.props.lng,
      recharges: this.props.recharges,
      clicked: this.props.clicked,
    };
  }

  render() {
    return (
      <div className="div-principal-borne">
        <div className="image-marker" onClick={this.props.onClickMarker}>
          <img
            alt="Marker borne recharge"
            src={this.props.marker}
            width="39"
            height="50"
          />
        </div>
      </div>
    );
  }
}
