function getFirstThreeWordsRandomChuckJoke() {
  return getRandomChuckJoke().then((randomJoke) => {
    const { value } = randomJoke;
    return value.split(" ").slice(0, 3).join(" ");
  });
}

function getRandomChuckJoke() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((bodyResponse) => bodyResponse.json())
    .then((response) => {
      return response;
    });
}

export default getFirstThreeWordsRandomChuckJoke;
