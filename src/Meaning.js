import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="definition">
        {props.meaning.definitions[0].definition}
      </div>
      <div className="example">{props.meaning.definitions[0].example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
