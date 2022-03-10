import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
} from "@material-ui/core";

import Chart from 'chart.js/auto'
import {CategoryScale} from 'chart.js'
Chart.register(CategoryScale)
import Styles from './chart.module.css'
const chart = ( coin ) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [flag,setflag] = useState(false);

  
  const fetchHistoricData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.props}/market_chart?vs_currency=usd&days=7d`);
    setflag(true);
    setHistoricData(data.prices);
  };


  useEffect(() => {
    fetchHistoricData();

  // console.log(coin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

      <div className={Styles.chartbody} >
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={50}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past  Days ) in `,
                    borderColor: coin.color >= 0 ? "#16c784" : "red"
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
         
          </>
        )}
      </div>
  );
};

export default chart;
