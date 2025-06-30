import '../../src/App.css';
import {dataUsuarios}  from "../data/dataUsuarios"



export const Card = ({nombre}) => {

 const { edad, email, telefono, direccion } = dataUsuarios;
    

  return (
    <>
        <h3>Nombre Usuario: { nombre || dataUsuarios.nombre }</h3>
     <ul>
        <li>{edad}</li>
        <li>{email}</li>
        <li>{telefono}</li>
        <li>{direccion.calle} {direccion.numero}</li>
     </ul>
    
    </>
  )
}
