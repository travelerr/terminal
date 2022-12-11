import { useEffect } from "react";

const baseUrl = "https://api.polygon.io/v2/aggs/ticker/";

export default function Markets() {
  let x =
    "AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=RfAm1Fb1UPAIFHdlrvnS5pKvLounU9hO";
  useEffect(() => {}, []);

  return <p>{process.env.polygonApiKey}</p>;
}
