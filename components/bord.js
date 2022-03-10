import React,{useEffect,useState} from 'react'
import styles from './bord.module.css'
import Axios from 'axios'
import {
  CircularProgress
} from "@material-ui/core";
export default function bord() {
  const [api,setapi] = useState()
  const a = 2
 const reqtrending = async() =>{
  const terend = await Axios.get('https://api.coingecko.com/api/v3/search/trending')
  // console.log(terend.data.coins);
  setapi(terend.data.coins)
 }
useEffect(() => {
reqtrending()
}, [])

  return (
    <div className={styles.bordmain}>
<div className={styles.leftcard}>
<h3>Today's Cryptocurrency Prices by Market Cap</h3>
<p>The global crypto market cap is $1.83T, a 2.87% increase over the last day.Read More</p>
</div>

<div className={styles.rigthcard}>
<h4 className={styles.titlecard}>🔥 trending</h4>
<ul className={styles.ulterend}>
{!api ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={50}
            thickness={1}
          />
        ) : (
          <>
         
{
 api.map(item => {
  return (
 
    <li className={styles.literend} key={item.item.id}>{item.item.name}</li>

  )
})
}

       
         
          </>
        )}
        </ul>
</div>

    </div>
  )
}
