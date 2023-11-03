'use client'
import React, { useState, useEffect } from "react";
import InputBox from "../components/input";
import Card from "../components/Card";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const timestamp = "1694478380382";
  const apiKey = "7a63a78e151d51eb9f30e487feb1283d";
  const hashValue = "9afd57b31a5c7bcfb7197fe2345b874a";

  const fetchData = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${inputValue}`;

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setCharacters(jsonData.data.results);
      console.log(
        "Resultado da busca de personagens:",
        JSON.stringify(jsonData.data.results)
      );
    } catch (error) {
      console.error("Erro ao buscar dados da API Marvel:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleCharacterClick = (name) => {
    setInputValue(name);
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData();
    }
  };

  return (
    <div className="font-sans m-0 p-0">
      <div className="max-w-screen-xl mx-auto p-4 mt-52 flex flex-wrap justify-center">
        <InputBox
          inputValue={inputValue}
          onChange={handleInputChange}
          onClick={handleButtonClick}
        />
      </div>
      <div className="max-w-screen-xl mx-auto p-4 mt-10 flex flex-wrap justify-center">
        {characters.map((character, index) => (
          <Card
            key={index}
            name={character.name}
            description={character.description}
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </div>
    </div>
  );
}
