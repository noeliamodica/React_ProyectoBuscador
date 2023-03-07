import { useMemo } from "react";
import styled from "styled-components";


const StyledMarker = styled.span`
    background-color: yellow;
    font-weight: bolder;
    border-radius: 2 px;
    `;

const StyleItem = styled.button`
    color: black;
    display: block;
    padding: 10 px;
    border: none;
    width: 100%;
    text-decoration: none;
`;


export default function MarketItem ({item, query, OnClick }){

    const {left, center, right} = useMemo(()=> getPositions (item, query), [item, query]);

    //genero una forma de marcar el elemento
    function getPositions(item, query){
        //para que me diga a partir de que posicion dentro del texto esta la coincidencia que estoy mostrando
        const index = item.title.toLowerCase().indexOf(query);
        //divido la longitud del texto en tres partes
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.lenght);
        const center = item.title.slice(index, index + query.lenght);

        return {
            left,
            center,
            right,  
        }
    }

    function handleClick(){
        OnClick(item);
    }

    return (
        <StyleItem onClick={handleClick}>
           {left} 
           <StyledMarker> {center} </StyledMarker>  
           {right} 
        </StyleItem>
    )
}