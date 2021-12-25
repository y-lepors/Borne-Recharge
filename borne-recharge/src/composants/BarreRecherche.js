import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../style/BarreRecherche.css";

export default class BarreRecherche extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    const options = {
      types: ["address"],
    };
    this.autoComplete = new mapApi.places.Autocomplete(
      this.searchInput,
      options
    );
    this.autoComplete.addListener("place_changed", this.onPlaceChanged);
    this.autoComplete.bindTo("bounds", map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map, addplace } = this.props) => {
    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(place);
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = "";
  }

  render() {
    return (
      <div className="div-principal-barreRecherche">
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Adresse
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Entrez une adresse"
                ref={(ref) => {
                  this.searchInput = ref;
                }}
                onFocus={this.clearSearchBox}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
