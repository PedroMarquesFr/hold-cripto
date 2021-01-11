import axios from "axios";

export default async function handleFetchAPI() {
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const resp = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=2500&convert=USD&CMC_PRO_API_KEY=5d205bcb-47b9-4b1e-a8fe-15b5d54561cb",
    config
  );
  console.log(resp.data.data);
  return resp.data.data;
}
