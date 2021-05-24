function getGifByWords(query) {
  return searchGifByQuery({ query, limit: 1 }).then((gifItem) => {
    return gifItem;
  });
}

function searchGifByQuery({ query = "" }) {
  const uri = new URLSearchParams();
  uri.append("api_key", "IFoSfmqHPF4BJqvwuuthUI98VKQehvq7");
  uri.append("q", query);
  uri.append("limit", 1);

  return fetch(`https://api.giphy.com/v1/gifs/search?${uri.toString()}`)
    .then((bodyResponse) => bodyResponse.json())
    .then((response) => {
      const { data } = response;
      const [gifItem] = data;
      const {
        images: { original },
      } = gifItem;
      return original;
    });
}

export default getGifByWords;
