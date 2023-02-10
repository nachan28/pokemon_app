import React from "react";
import "./Card.css"

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div>タイプ</div>
      {pokemon.types.map((type) => {
        return (
          <div key={type.type.name}>
            <span className="typeName">{type.type.name}</span>
          </div>
        );
      })}
      <div className="cardInfo">
        <div className="cardData">
            <div className="title">
                重さ: {pokemon.weight}
            </div>
            <div className="title">
                高さ: {pokemon.height}
            </div>
            <div className="title">
                アビリティ: {pokemon.abilities[0].ability.name}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
