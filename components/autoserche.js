import React, { useState ,useEffect} from "react";
import styles from "./auto.module.css";
import InputField from "./inputserch";
import Link from 'next/link'
import axios from "axios";
const Autocomplete = (props) => {
  const [api,setapi] = useState(props.props.coins)

  useEffect( async() => {
//  const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=7d')
//     console.log(data);
//     setapi(data)
console.log(api,'props');
  }, [])
  
  //local variables
  let content = null;
  const data = [
    { name: "Andrew R. Kelly" },
    { name: "Adrian Sanchez" },
    { name: "Anderson Brown" },
    { name: "Anna Valio" },
    { name: "tron Mathews" },
    { name: "Alicia keys" },
    { name: "bitcoin Dot" },
    { name: "Bob Squarepants" },
    { name: "Anonymous" },
    { name: "Rahat Verma" },
    { name: "Aman Bansal" },
    { name: "Piyush Goyal" },
    { name: "Ayush Verma" },
  ];

  const [searchText, setSearchText] = useState(""); // search Text from Input Field
  const [searchResult, setSearchResult] = useState([]); //Search Results Array

  const onSearch = (value) => {
    if (value === "") {
      setSearchResult([]);
    } else {
      const results = api.filter(
        (item) =>
          item.name.toLowerCase().substring(0, value.length) ===
          value.toLowerCase()
      );
      setSearchResult(results);
    }
  };

  //On Input of Search Text
  const changeHandler = (event) => {
    const value = event.target.value;
    onSearch(value);
    setSearchText(value);
  };
// function Fixeds(sum){
//   return sum.toFixed(4)
// }
  //Displaying The Results Fetched
  content = searchResult.map((res) => {
    return (
      <div>
       <Link
        href={{
          pathname: '/about',
          query: { name: res.name },
        }}
       >
       <p>{res.name}</p>
       </Link>
      </div>
    );
  });

  return (
    <div className={styles.DivStyle}>
      <InputField
        placeholder="Search"
        autoFocus={true}
        onChange={changeHandler}
        type="text"
        className={styles.SearchBox}
        value={searchText}
      
      />
      {/* <div className={styles.modal}>{content}</div> */}
      {
        content.length >= 1 ? (
        <div className={styles.modal}>{content} -  test</div>
       ) : (
        <div></div> 
       )
      }
    </div>
  );
};

export default Autocomplete;
