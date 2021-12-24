import React, { Component } from "react";
import "../style/Accueil.css";
import Map from "../composants/Map";
import { Form, FormControl, Button } from "react-bootstrap";

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Barre de recherche */}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Entrez une adresse"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Chercher</Button>
        </Form>

        {/* Carte des bornes de recharge */}
        <Map />
      </div>
    );
  }
}
