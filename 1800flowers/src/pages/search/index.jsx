import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const SearchFetch = (query) => {
    return axios.get(`https://fine-erin-turkey-hose.cyclic.app/all?q=${query}`);
  };

  useEffect(() => {
    SearchFetch("")
      .then((res) => {
        searchData(res.data);
      })
      .catch((er) => {
        console.log("er", er);
      });
  }, []);
  const handleSearch = () => {
    SearchFetch(query)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((er) => console.log("err:", er));
  };
  return (
    <div style={{display:"flex"}}>
        <div style={{border:"1px solid #9062bc"}}>
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        
      />
      <button onClick={handleSearch}>Search</button>
        </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {searchData.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.img} alt="img" />
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
