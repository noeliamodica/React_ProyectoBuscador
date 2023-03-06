import {useState} from 'react';
import './App.css';

//simular un conjunto de datos
const people =[
  {
    id: 'people-01',
    title: 'Juan Perez',

  },
  {
    id: 'people-02',
    title: 'Marcos Rivas',

  },
  {
    id: 'people-03',
    title: 'Sergio Martinez',

  },
  {
    id: 'people-04',
    title: 'Laura Jimenez',

  },
  {
    id: 'people-05',
    title: 'Horacio Martinez',

  },

];

const calendar =[
  {
    id: 'calendar-01',
    title: 'Sesion de seguimiento',

  },
  {
    id: 'calendar-02',
    title: 'Revision de propuestas',

  },
  {
    id: 'calendar-03',
    title: 'Evento de donacion',

  },
  {
    id: 'calendar-04',
    title: 'Junta semanal de equipo',

  },
  {
    id: 'calendar-05',
    title: 'Revision de pendientes con cliente',

  },

];
const emails =[
  {
    id: 'email-01',
    title: 'Reporte de resultados',

  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio',

  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad',

  },
  {
    id: 'email-04',
    title: 'Proximos eventos',

  },
  {
    id: 'email-05',
    title: 'Participa en la encuenta',

  },

];


function App() {

  //definimos una interfaz que nos permita cambiar entre los conjuntos de datos

  //Vamos a tener acceso de toda la informacion desde el inicio
  const [data,setData]= useState(...people, ...calendar,...emails);

  //Nuestra seleccion una vez que desplegamos el buscador
  const [selection,setSelection]= useState(null);

  //el estado inicial va a ser todos
  const [currentOption, setCurrentOption]= useState('all');

  function handleClick(e){
    const op = e.target.name;
  

  //cuando le demos click a los botones vamos a cambiar nuestro setCurrentOption
    switch(op){
      case 'all':
        setData([...people,...calendar,...emails]);
        setCurrentOption('all');
        break;

      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;

      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
         
      case 'emails':
        setData([...emails]);
        setCurrentOption('emails');
        break;
        
        
        
        default:
        }    
    }

  return (
    /* le ponemos nombre porque vamos a utilizar un metodo para reconocer todos los botones*/
    <div>
        
      <button onClick={handleClick} name="all" >All</button>
      <button onClick={handleClick} name="people" >People</button>
      <button onClick={handleClick} name="calendar" >Calendar</button>
      <button onClick={handleClick} name="emails" >Emails</button>

        <div>
        /* esto no lo pude hacer */
        </div>
    
    </div>
  );
}

export default App;
