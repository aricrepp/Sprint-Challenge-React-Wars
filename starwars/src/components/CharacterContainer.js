import React, {useState} from "react";
import Character from "./Character";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterContainer = props => {

    return(
        <div className="wrapper"> 
            <h1 color="primary">Characters</h1>
            <div className="character_container">
                {props.data.map(item => {
                    // console.log(item);
                    return <Character character={item}/>
                })}
            </div>
        </div>   
    );
}

export default CharacterContainer;