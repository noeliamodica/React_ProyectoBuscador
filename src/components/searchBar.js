import { useState } from "react"

//en la funcion pedimos las props y un evento
export default function SearchBar({items, onItemSelected}){


    //para manejar la busqueda

    const [query, setQuery] = useState('');
    //necesito mostrar los elementos que de acuerdo a un input deberian ser el resultado de la busqueda
    const [results, setResults] = useState([]);

    function handleChange (e){
        const value = e.target.value;
        //esta va a ser la busqueda
        setQuery(value);
    }
        return(
            <div>
                <input type="text" onChange={handleChange} value={query} />
            </div>
        )
}