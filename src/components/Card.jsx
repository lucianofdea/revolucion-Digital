import datosUsuarios  from "../data/datosUsuarios"


export const Card = ({nombre}) => {

 const { edad, email, telefono, direccion } = datosUsuarios;
    

  return (
    <>
        <h3>Nombre Usuario: { nombre || datosUsuarios.nombre }</h3>
     <ul>
        <li>{edad}</li>
        <li>{email}</li>
        <li>{telefono}</li>
        <li>{direccion.calle} {direccion.numero}</li>
     </ul>
    
    </>
  )
}
