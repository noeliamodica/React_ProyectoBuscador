import { useMemo } from "react";
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
    return (
        <button>
           {left} 
           <span style={{fontWeight: 'bolder', backgroundColor: 'yellow'}}> {center} </span>  
           {right} 
        </button>
    )
}