import React, { Component } from "react";
import "../style/Informations.css";

export default class Informations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="titre-tarifs">Informations</h1>
        <br></br>
        <h6 className="para1-tarifs">
          Notre sites propose d'installer des bornes AC et DC, nous vous
          expliquons ici la différence entres ces deux types de bornes.
        </h6>
        <br />
        <p className="textes-tarifs">
          <u>La recharge en AC :</u>
          <br />
          <br />
          Il s’agit de la méthode de recharge la plus fréquente pour les
          véhicules électriques. Lorsque vous branchez uvéhicule électrique à
          une borne de recharge AC, le courant est converti à l’intérieur du
          véhicule avant d’entrer dans la batterie. La vitesse de recharge
          dépend de la puissance de sortie de la borne, ainsi que de la
          puissance du chargeur du véhicule (on l’appelle le chargeur embarqué)
          pour convertir le courant en DC. différents types de bornes de
          recharge En général, l’intensité requise pour les chargeurs AC varie
          entre 16 A (3,7 kW en monophasé, 11kW en triphasé) et 32 A (7.4kW en
          monophasé, 22kW en triphasé). Il s’agit de la méthode la plus adaptée
          lorsque le véhicule reste garé pendant plus de 20 minutes sur une
          place de parking. Les chargeurs AC sont les plus répandus en raison de
          leurs coûts (de production, d’installation et de fonctionnement) moins
          élevés. Cela explique également le fait que recharger son véhicule
          avec un chargeur AC est plus intéressant financièrement. De plus, ce
          type de chargeurs est le plus adapté pour la recharge au quotidien.
        </p>
        <br />
        <p className="textes-tarifs">
          <u>La recharge en DC :</u>
          <br />
          <br />
          Les chargeurs rapides pour véhicules électriques recourent à la charge
          en DC. De plus, ils convertissent le courant avant qu’il n’entre dans
          le véhicule. Ainsi, une fois la conversion finie, le courant entre
          directement dans la batterie. Cela sans passer par le convertisseur du
          véhicule. Un chargeur DC nécessite cependant une grande intensité en
          provenance du réseau électrique. En effet, on les appelle souvent les
          « Super-chargeurs » entre 50kW et 250kW de puissance de recharge. Ses
          coûts (de production, d’installation et de fonctionnement) sont dès
          lors très élevés, ce qui engendre des tarifs de recharge supérieurs.
          Malgré tout, il permet de recharger un véhicule beaucoup plus
          rapidement. Il constitue la meilleure méthode pour recharger
          rapidement un véhicule lors de trajets sur de longues distances (pour
          les voitures compatibles avec la recharge en DC). Ce type de chargeur
          est généralement plus répandu le long des autoroutes que dans les
          logements privés, ou les sites d’entreprises.
        </p>
        <br />
        <br />
        <p className="textes-tarifs">
          En fin de compte, le chargeur adapté dépend de votre utilisation. Si
          vous avez besoin d’une recharge rapide pour continuer un trajet sur
          une longue distance, nous vous recommandons d’utiliser la recharge en
          DC (bien-sûr si votre voiture le permet). Enfin, pour toute autre
          utilisation, préférez la recharge en AC.
        </p>
      </div>
    );
  }
}
