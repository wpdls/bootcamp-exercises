import React, { useState, useEffect } from "react";
import Character from './Character'
const App = () => {
  const [characters, setCharacters] = useState();


  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(chars => {
        setCharacters(chars.results);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []); // empty array equivalent of componentDidMount

  useEffect(() => {
    console.log('characters', characters)
    // if (character) {
    //   const filmUrl = character.films[0];
    //   fetch(filmUrl)
    //     .then(res => res.json())
    //     .then(filmData => {
    //       setFilm(filmData);
    //     })
    //     .catch(err => {
    //       console.log("err", err);
    //     });
    // }
  }, [characters]);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    {characters && characters.map(character => {
      return (
        <Character character={character} />
      )
    })}

    {/* <p>{film && film.title}</p> */}
    </div>
  )
};

export default App;
