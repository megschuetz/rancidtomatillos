const fetchResponse = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error')
      } else {
        return response.json()
      }
    });
};

export default fetchResponse;