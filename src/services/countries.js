import axios from "axios"

const contriesAllUrl = "https://restcountries.eu/rest/v2/all"
const countrieUrl = "https://restcountries.eu/rest/v2/name/"

const getAll = () => {
  const request = axios.get(contriesAllUrl)
  return request.then((response) => response.data)
}

const get1 = (name) => {
  const request = axios.get(`${countrieUrl}${name}`)
  return request.then((response) => response.data)
}

export default { getAll, get1 }
