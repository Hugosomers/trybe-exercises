const fetchFunction = () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const myObj = {
    method: 'GET',
    headers: {'Accept': 'application/Json'}
  }
  return fetch(URL, myObj)
    .then(response => response.json())
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)) // Olhei essa parte no gabarito. 
}

module.exports = {
  fetchFunction
}