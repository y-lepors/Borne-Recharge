import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../style/Bornes.css";

export default class Bornes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borne: null,
      recharge: {
        idRecharge: -1,
        nomRecharge: "",
        puissanceRecharge: 0,
        typeCourant: "",
        accesRecharge: "",
      },
      latBorne: 0,
      lngBorne: 0,
      nomsRecharges: ["Standard", "Accélérée"],
      puissanceMinRecharge: 3,
      puissanceMaxRecharge: 25,
      typesCourantRecharges: [
        "Alternatif monophasé",
        "Alternatif triphasé",
        "Continu",
      ],
      accesRecharges: ["Payant", "Gratuit"],
    };
  }

  render() {
    return (
      <div>
        <h1>Bornes</h1>

        <div className="bornes-div-dropdowns">
          {/* Liste déroulante des UFRs */}
          <div className="div-selection">
            <p>Nom de la recharge</p>
            <Dropdown>
              {/* Nom de la recharge */}
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                {this.state.nomsRecharges[0]}
              </Dropdown.Toggle>

              {/* Menu déroulant des noms de recharges */}
              <Dropdown.Menu>
                {this.state.nomsRecharges.map((nom) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        let recharge = this.state.recharge;
                        recharge.nomRecharge = nom;
                        this.setState({ recharge });
                      }}
                    >
                      {nom}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
