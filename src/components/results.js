import { useState, useMemo, useEffect } from "react";
import MarketItem from "./markedItem";

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
    <div>
      {query !== "" ? (
        filteredItems.map((item) => <MarketItem key={item.id} item={item} query={query} OnClick={onItemSelected} />)
      ) : (
        ""
      )}
    </div>
  );
}