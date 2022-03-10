import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Mak from "../components/mak";
import Link from "next/link";
import Bord from "../components/bord";
import Market from "../components/market";
import Autocomplete from "../components/autoserche";
import Axios from "axios";
export default function Home(coins) {
  const [coinslist, setcoinslist] = useState(coins.coins.length);
  const [gas, setgas] = useState();
  const [exchange,setexchange] = useState()
  const getgas = async () => {
    const { data } = await Axios.get(
      "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=JQXZT7TYX6ATNDUUEIXUD4BJEWNSHTQGM7"
    );
    setgas(data.result.ProposeGasPrice);
  };
  const Getexchange =async ()=>{
    const {data} = await Axios.get('https://api.coingecko.com/api/v3/exchanges')
    console.log(data);
    setexchange(data.length)
  }
  useEffect(() => {
    getgas();
    Getexchange()
    // console.log(coins.coins.length);
  }, []);

  return (
    <div className={styles.bodys}>
      <nav className={styles.nav}>
        <div className={styles.up}>
          <div className={styles.lefticon}>
            <Image
              src={require("../assets/ge.jpeg")}
              alt="Picture of the author"
              width={"200px"}
              layout="fixed"
              height={"100%"}
              className={styles.imagenav}
            />
          </div>
          <div className={styles.rigthicon}>
      <Autocomplete props={coins}/>
          </div>
        </div>

        <div className={styles.dow}>
          <ul>
            <li>coins: {coinslist} </li>
            <li>Exchange: {exchange} </li>
            <li>Gas: {gas} </li>
          </ul>
        </div>
      </nav>
      <Bord />
      <Market props={coins} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=7d"
  );
  const coin = await res.json();
  return {
    props: {
      coins: coin,
    },
  };
}
