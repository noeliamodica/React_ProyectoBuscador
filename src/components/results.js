import { useState, useMemo } from "react";


export default function Results ({items, onItemSelected, query, onResultsCalculated}){

    const [results, setResults] = useState([]);

    //necesito hacer el calculo como un algoritmo de busqueda
    //entre corchetes paso las dependencias, cdo cambie el estado de una de ellas cambiara el valor
    const filteredItems = useMemo(() => findMatch(items, query), [items, query]) ;

    //la funcion necesita dos parametros, los elementos donde va a buscar y el query
    //quiero que se ejecute cuando la busqueda del texto cambia (query) o cdo cambio la fte de datos (items)
    function findMatch (items, query){
        console.log("hola");
    }

    return (
        <div>
            Hola
        </div>
    )
}