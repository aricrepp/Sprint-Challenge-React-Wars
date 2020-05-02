import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
  } from "reactstrap";

const Character = props => {

    // created: "2017-11-04T18:50:21.651Z"
    // episode: (31) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
    // gender: "Male"
    // id: 2
    // image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    // location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
    // name: "Morty Smith"
    // origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
    // species: "Human"
    // status: "Alive"
    // type: ""
    // url: "https://rickandmortyapi.com/api/character/2"

    return (
        <div className="card_con">
          <Card color="darkgrey"className="card_">
            <CardImg top width="100%" src={props.character.image} alt="Card image cap" />
            <CardBody className="card_body">
              <CardTitle className="card_title">{props.character.name}</CardTitle>
              <div className="subText borderBottom">
                <CardText>Status:</CardText>
                <CardText>{props.character.status}</CardText>
              </div>
              <div className="subText borderBottom">
                <CardText>Species:</CardText>
                <CardText>{props.character.species}</CardText>
              </div>
              <div className="subText borderBottom">
                <CardText>Type:</CardText>
                <CardText>{props.character.type}</CardText>
              </div>
              <div className="subText">
                <CardText>Origin:</CardText>
                <CardText>{props.character.origin.name}</CardText>
              </div>

            </CardBody>
          </Card>
        </div>
      );
}

export default Character;
