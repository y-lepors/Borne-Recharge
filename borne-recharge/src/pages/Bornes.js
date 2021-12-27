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
      accesRecharges: ["Gratuit", "Payant"],
    };
  }

  componentDidMount() {
    this.setState({
      recharge: {
        idRecharge: -1,
        nomRecharge: this.state.nomsRecharges[0],
        puissanceRecharge: this.state.puissanceMinRecharge,
        typeCourant: this.state.typesCourantRecharges[0],
        accesRecharge: this.state.accesRecharges[0],
      },
    });
  }

  render() {
    return (
      <div>
        <h1 className="titre-bornes">Bornes</h1>

        <div className="div-bornes-contenu">
          <div className="div-selections-bornes">
            <h4 className="bornes-sous-titre">Détails de la borne</h4>

            {/* Liste déroulante des UFRs */}
            <div className="div-selection">
              <p>Nom de la recharge</p>
              <Dropdown>
                {/* Nom de la recharge */}
                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  {this.state.recharge.nomRecharge}
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

            {/* Liste déroulante des types de courant des recharges */}
            <div className="div-selection">
              <p>Type de courant de la recharge</p>
              <Dropdown>
                {/* Type de courant la recharge */}
                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  {this.state.recharge.typeCourant}
                </Dropdown.Toggle>

                {/* Menu déroulant des types de recharges */}
                <Dropdown.Menu>
                  {this.state.typesCourantRecharges.map((type) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          let recharge = this.state.recharge;
                          recharge.typeCourant = type;
                          this.setState({ recharge });
                        }}
                      >
                        {type}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Liste déroulante des accès de recharges */}
            <div className="div-selection">
              <p>Accès de la recharge</p>
              <Dropdown>
                {/* Accès de la recharge */}
                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  {this.state.recharge.accesRecharge}
                </Dropdown.Toggle>

                {/* Menu déroulant des accès de recharges */}
                <Dropdown.Menu>
                  {this.state.accesRecharges.map((acces) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          let recharge = this.state.recharge;
                          recharge.accesRecharge = acces;
                          this.setState({ recharge });
                        }}
                      >
                        {acces}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Avant : public/privé ? */}
            {/* Avant : puissance recharge (input number) */}
            {/* Ici: Montant total */}
          </div>

          {/* Formulaire */}
          <div className="bornes-formulaire">
            <h4 className="bornes-sous-titre">Formulaire</h4>
          </div>
        </div>
      </div>
    );
  }
}
