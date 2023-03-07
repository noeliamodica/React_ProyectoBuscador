import { useState } from "react"
import Results from "./results";
import styled from "styled-components";

//para estilos
const SearchBarContainer = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
`;

const StyledInput = styled.input`
    padding: 10px;
    border-radius: 5px:
    min-width: 400 px;
    box-sizing: border-box;
    border: solid 1px #222;
    outline: none;
`;

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

    function handleResults(items){
        setResults(items);
    }

    function handleItemSelected(){

    }
        return(
            <SearchBarContainer>
                {results && <div>{results.length} results</div>}
                <StyledInput type="text" onChange={handleChange} value={query} >
                    </StyledInput>
                <Results items={items}
                 onItemSelected={handleItemSelected} 
                 query = {query}
                 onResultsCalculated={handleResults} />
            </SearchBarContainer>
        )
}