import React, { useCallback, useEffect, useState } from "react";

import JokeCard from "./components/jokeCard";
import getFirstThreeWordsRandomChuckJoke from "./services/getFirstThreeWordsRandomChuckJoke";
import getGifByWords from "./services/getGifByWords";

const defaultGifSrc = "Loading...";
const defaultJokeText = "Loading...";

export default function App() {
  const [jokeLoading, setJokeLoading] = useState(true);
  const [jokeData, setJokeData] = useState();
  const [jokeError, setJokeError] = useState();

  const [gifLoading, setGifLoading] = useState(true);
  const [gifData, setGifData] = useState();
  const [gifError, setGifError] = useState();

  const loadRandom = useCallback(() => {
    setJokeLoading(true);
    getFirstThreeWordsRandomChuckJoke()
      .then(
        (firstThreeJokeWords) => {
          setJokeLoading(false);
          setJokeData(firstThreeJokeWords);
          return getGifByWords(firstThreeJokeWords);
        },
        (error) => {
          setJokeLoading(false);
          setJokeError(error);
        }
      )
      .then(
        (gifItem) => {
          setGifLoading(false);
          setGifData(gifItem.webp);
        },
        (error) => {
          setGifLoading(false);
          setGifError(error);
        }
      );
  }, []);

  useEffect(() => {
    loadRandom();
  }, [loadRandom]);

  const handleNextJoke = () => {
    loadRandom();
  };

  return (
    <main>
      <h1>Random Chuck joke</h1>
      <button onClick={handleNextJoke}>Next joke</button>
      <JokeCard
        imgSrc={gifLoading ? defaultGifSrc : gifData}
        text={jokeLoading ? defaultJokeText : jokeData}
      />
    </main>
  );
}
