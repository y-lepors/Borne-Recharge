import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Borne from "./Borne";
import "../style/Map.css";
import markerOrange from "../data/markerOrange.png";
import markerBlue from "../data/markerBlue.png";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 48.390317071654714, lng: -4.485942630953148 },
      zoom: 12,
      bornes: [
        {
          idBorne: 0,
          lat: 48.393336061046526,
          lng: -4.52146233829468,
          recharges: [],
          clicked: false,
        },
        {
          idBorne: 1,
          lat: 48.398741890988425,
          lng: -4.4947074704475325,
          recharges: [],
          clicked: false,
        },
        {
          idBorne: 2,
          lat: 48.390193174993925,
          lng: -4.477712994402111,
          recharges: [],
          clicked: false,
        },
      ],
    };

    this.onClickMarker = this.onClickMarker.bind(this);
  }

  componentDidMount() {
    let bornes = [];
    // fetch bornes
    //    if (b.accesBorne === "public") bornes.push({idBorne: b.idBorne, lng: b.longitude, lat: b.latitude, recharges=[]});

    let recharges = [];
    // fetch recharges...

    let liaisonsBornesRecharges = [];
    // fetch liaisons borne/recharges...
    //    liaisonsBornesRecharges.map((liaison) => {bornes.find((idBorne) => idBorne === liaison.Borne_idBorne).recharges.push(recharges.find((idRecharge) => idRecharge === liaison.Recharge_idRecharge))});

    // temporaire
    bornes = this.state.bornes;
    bornes[0].recharges = [
      {
        idRecharge: 0,
        nomRecharge: "Accélérée",
        puissanceRecharge: 22,
        typeCourant: "Alternatif triphasé",
        accesRecharge: "Payant",
      },
      {
        idRecharge: 1,
        nomRecharge: "Standard",
        puissanceRecharge: 3,
        typeCourant: "Alternatif monophasé",
        accesRecharge: "gratuit",
      },
    ];
    bornes[1].recharges = [
      {
        idRecharge: 0,
        nomRecharge: "Accélérée",
        puissanceRecharge: 17,
        typeCourant: "Alternatif monophasé",
        accesRecharge: "Payant",
      },
    ];
    this.setState({ bornes });
  }

  /**
   * Récupère les coordonnées de la localisation actuelle.
   */
  setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: [position.coords.latitude, position.coords.longitude],
        });
      });
    }
  }

  /**
   * Met à jour le status "clicked" de toutes les bornes.
   * Vrai sur la borne cliquée, si et seulement si elle ne l'était pas déjà, faux sinon.
   * Faux sur toutes les autres bornes.
   *
   * @param idBorne id de la borne cliquée
   */
  onClickMarker(idBorne) {
    let bornesAJour = this.state.bornes;
    bornesAJour.map(
      (borne) =>
        (borne.clicked = idBorne === borne.idBorne ? !borne.clicked : false)
    );
    this.setState({ bornes: bornesAJour });
  }

  render() {
    return (
      <div className="div-principal-map">
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          // bootstrapURLKeys={{ key: "AIzaSyAxmTHf2XgWQtqMrN4lBVFKUPUNhgc2pIY" }}
        >
          {this.state.bornes.map((borne) => (
            <Borne
              idBorne={borne.idBorne}
              lat={borne.lat}
              lng={borne.lng}
              recharges={borne.recharges}
              clicked={borne.clicked}
              marker={borne.clicked ? markerOrange : markerBlue}
              onClickMarker={() => this.onClickMarker(borne.idBorne)}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
