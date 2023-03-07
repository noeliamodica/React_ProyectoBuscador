import { useState, useMemo, useEffect } from "react";
import MarketItem from "./markedItem";
import styled from "styled-components";

const ResultContainer = styled.div`
    position: absolute;
    width: 400 px;
    background: white;
    border: solid 1px #222;
    border-top: -3px;
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
`;

export default function Results({ items, onItemSelected, query, onResultsCalculated }) {
  const [results, setResults] = useState([]);

  const filteredItems = useMemo(() => getFilteredItems(items, query), [items, query]);

    //para que cada vez que haga una consulta me diga cuantos elementos hay

  useEffect(()=>{
    onResultsCalculated(results);
  }, [results]);


  function getFilteredItems(items, query) {
    if (!query || query.length === 0) {
      return [];
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const res = items.filter((i) => {
      return i.title && i.title.toLowerCase().indexOf(lowerCaseQuery) >= 0;
    });

    setResults(res);

    return res;
  }

  

  return (
    <ResultContainer>
      {query !== "" ? (
        filteredItems.map((item) => <MarketItem key={item.id} item={item} query={query} OnClick={onItemSelected} />)
      ) : (
        ""
      )}
    </ResultContainer>
  );
}