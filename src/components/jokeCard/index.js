import React from "react";

export default function JokeCard({ imgSrc, text }) {
  return (
    <article>
      <img src={imgSrc} />
      <h2>{text}</h2>
    </article>
  );
}
