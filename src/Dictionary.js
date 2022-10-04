import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a2ece75d6bc9497e9cd4d3735828dbbc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey} ` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus="on"
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: ocean, travel, sunset, yoga...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
