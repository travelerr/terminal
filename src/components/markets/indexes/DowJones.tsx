import { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";
import { Card, Dropdown } from "react-bootstrap";
import { MoreHorizontal } from "react-feather";
import { MarketData, MarketDataPoint } from "../../../types/markets";
import ApexCharts from "react-apexcharts";
import axios from "axios";

// const data = [
//   {
//     data: [
//       {
//         x: 1670532300000,
//         y: [51.98, 56.29, 51.59, 53.85],
//       },
//       {
//         x: new Date(2016, 2, 1),
//         y: [53.66, 54.99, 51.35, 52.95],
//       },
//       {
//         x: new Date(2016, 3, 1),
//         y: [52.96, 53.78, 51.54, 52.48],
//       },
//       {
//         x: new Date(2016, 4, 1),
//         y: [52.54, 52.79, 47.88, 49.24],
//       },
//       {
//         x: new Date(2016, 5, 1),
//         y: [49.1, 52.86, 47.7, 52.78],
//       },
//       {
//         x: new Date(2016, 6, 1),
//         y: [52.83, 53.48, 50.32, 52.29],
//       },
//       {
//         x: new Date(2016, 7, 1),
//         y: [52.2, 54.48, 51.64, 52.58],
//       },
//       {
//         x: new Date(2016, 8, 1),
//         y: [52.76, 57.35, 52.15, 57.03],
//       },
//       {
//         x: new Date(2016, 9, 1),
//         y: [57.04, 58.15, 48.88, 56.19],
//       },
//       {
//         x: new Date(2016, 10, 1),
//         y: [56.09, 58.85, 55.48, 58.79],
//       },
//       {
//         x: new Date(2016, 11, 1),
//         y: [58.78, 59.65, 58.23, 59.05],
//       },
//       {
//         x: new Date(2017, 0, 1),
//         y: [59.37, 61.11, 59.35, 60.34],
//       },
//       {
//         x: new Date(2017, 1, 1),
//         y: [60.4, 60.52, 56.71, 56.93],
//       },
//       {
//         x: new Date(2017, 2, 1),
//         y: [57.02, 59.71, 56.04, 56.82],
//       },
//       {
//         x: new Date(2017, 3, 1),
//         y: [56.97, 59.62, 54.77, 59.3],
//       },
//       {
//         x: new Date(2017, 4, 1),
//         y: [59.11, 62.29, 59.1, 59.85],
//       },
//       {
//         x: new Date(2017, 5, 1),
//         y: [59.97, 60.11, 55.66, 58.42],
//       },
//       {
//         x: new Date(2017, 6, 1),
//         y: [58.34, 60.93, 56.75, 57.42],
//       },
//       {
//         x: new Date(2017, 7, 1),
//         y: [57.76, 58.08, 53.18, 54.71],
//       },
//       {
//         x: new Date(2017, 8, 1),
//         y: [54.8, 61.42, 53.58, 57.35],
//       },
//       {
//         x: new Date(2017, 9, 1),
//         y: [57.56, 63.09, 57.0, 62.99],
//       },
//       {
//         x: new Date(2017, 10, 1),
//         y: [62.89, 63.42, 59.72, 61.76],
//       },
//       {
//         x: new Date(2017, 11, 1),
//         y: [61.71, 64.15, 61.29, 63.04],
//       },
//       {
//         x: new Date(2018, 0, 1),
//         y: [59.37, 61.11, 59.35, 60.34],
//       },
//       {
//         x: new Date(2018, 1, 1),
//         y: [60.4, 60.52, 56.71, 56.93],
//       },
//       {
//         x: new Date(2018, 2, 1),
//         y: [57.02, 59.71, 56.04, 56.82],
//       },
//       {
//         x: new Date(2018, 3, 1),
//         y: [56.97, 59.62, 54.77, 59.3],
//       },
//       {
//         x: new Date(2018, 4, 1),
//         y: [59.11, 62.29, 59.1, 59.85],
//       },
//       {
//         x: new Date(2018, 5, 1),
//         y: [59.97, 60.11, 55.66, 58.42],
//       },
//       {
//         x: new Date(2018, 6, 1),
//         y: [58.34, 60.93, 56.75, 57.42],
//       },
//       {
//         x: new Date(2018, 7, 1),
//         y: [57.76, 58.08, 51.18, 54.71],
//       },
//       {
//         x: new Date(2018, 8, 1),
//         y: [54.8, 61.42, 53.18, 57.35],
//       },
//       {
//         x: new Date(2018, 9, 1),
//         y: [57.56, 62.09, 57.0, 61.99],
//       },
//       {
//         x: new Date(2018, 10, 1),
//         y: [62.89, 63.42, 59.72, 61.76],
//       },
//       {
//         x: new Date(2018, 11, 1),
//         y: [61.71, 64.15, 61.29, 63.04],
//       },
//     ],
//   },
// ];

const options: ApexOptions = {
  stroke: {
    width: 1,
  },
  xaxis: {
    type: "datetime",
  },
  colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"],
};

const apiKey = process.env.REACT_APP_POLYGON_API_KEY;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
let m = currentMonth.toLocaleString("en-US", {
  minimumIntegerDigits: 2,
  useGrouping: false,
});
const currentDay = new Date().getDate() - 3;
let d = currentDay.toLocaleString("en-US", {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

const baseUrl: string = `https://api.polygon.io/v2/aggs/ticker/DIA/range/15/minute/${currentYear}-${m}-${d}/${currentYear}-${m}-${d}?adjusted=true&sort=asc&limit=120&apiKey=`;

const DowJones = () => {
  const [data, setData] = useState<ApexOptions["series"]>([]);
  useEffect(() => {
    // Trigger resize manually so chart doesn't fall off canvas
    window.dispatchEvent(new Event("resize"));
    fetchMarketData();
  }, []);

  const fetchMarketData = () => {
    axios({
      method: "get",
      url: baseUrl + apiKey,
      responseType: "json",
    }).then(function (response) {
      if (response?.data?.results !== null) {
        let results: MarketDataPoint[] = [];
        response.data.results.forEach(
          (r: { t: any; o: any; h: any; l: any; c: any }) => {
            results.push({
              x: r.t,
              y: [r.o, r.h, r.l, r.c],
            });
          }
        );
        setData([{ data: results }]);
      }
      console.log(response);
    });
  };

  return (
    <Card className="flex-fill">
      <Card.Header>
        <div className="card-actions float-end">
          <Dropdown>
            <Dropdown.Menu>
              <MoreHorizontal />
            </Dropdown.Menu>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another Action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Card.Title className="mb-0">LTC/BTC</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <ApexCharts
            options={options}
            series={data}
            type="candlestick"
            height="450"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DowJones;
