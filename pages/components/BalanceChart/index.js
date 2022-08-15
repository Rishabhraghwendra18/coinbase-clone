import React, { useState } from "react";
// import { useMoralisWeb3Api } from "react-moralis";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function BalanceChart() {
  const [prices, setPrices] = useState([
    1.6200848435516884, 1.0331382492342795, 0.6610163808260351, 0.9302576004915822, 0.9302576004915822, 0.9582033855357065, 1.9582033855357065, 0.8182033855357065, 0.9082033855357065, 0.7882033855357065,
  ]);

  // COMMENTED DUE TO FREE PLAN RATE LIMIT
  // const [isRun,setIsRun] = useState(false);
  // const Web3Api = useMoralisWeb3Api();
  // const fetchDatesToBlocks = async () => {
  //   const dates = [
  //     "2022-04-01",
  //     "2022-05-01",
  //     "2022-06-01",
  //     "2022-07-01",
  //     "2022-08-01",
  //     "2022-08-01",
  //     "2022-10-01",
  //   ];
  //   let blocks = await Promise.all(
  //     dates.map(async (e) => await Web3Api.native.getDateToBlock({ date: e }))
  //   );
  //   blocks = blocks.map((e) => e.block);
  //   let prices = await Promise.all(
  //     blocks.map(
  //       async (e) =>
  //         await Web3Api.token.getTokenPrice({
  //           address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  //           to_block: e,
  //         })
  //     )
  //   );
  //   prices = prices.map((e) => e.usdPrice);
  //   setPrices(prices);
  //   console.log("dateTOBlock: ", prices);
  // };
  // useEffect(() => {
  //   fetchDatesToBlocks();
  // });
  const data = {
    labels: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#3773f5",
        borderColor: "#3773f5",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#3773f5",
        pointBackgroundColor: "#3773f5",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3773f5",
        pointHoverBorderColor: "#3773f5",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: prices,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line data={data} options={options} width={400} height={150} />;
}

export default BalanceChart;
