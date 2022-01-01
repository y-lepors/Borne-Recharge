import React, { Component } from "react";
import "../style/Particuliers.css";
import facebook from "../data/facebook.png";
import gmail from "../data/gmail.png";
import instagram from "../data/instagram.png";
import twitter from "../data/twitter.png";

export default class Particuliers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="div-particuliers">
        <h1 class="titre-particuliers">Particuliers</h1>

        <p></p>

        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        

        <h2 class="h2-particuliers">Nos réseaux sociaux</h2>
        <br/>

        <div class="social-banner">

          <img
                alt=""
                src={facebook}
                width="100"
                height="100"
                className="image1"
                
              />{" "}

          <img
              alt=""
              src={gmail}
              width="100"
              height="100"
              className="image2"
              
            />{" "}
          <img
              alt=""
              src={twitter}
              width="100"
              height="100"
              className="image3"
              
            />{"    "}
          <img
                alt=""
                src={instagram}
                width="100"
                height="100"
                className="image4"
                
              />{"    "}

        </div>


      </div>
    );
  }
}
