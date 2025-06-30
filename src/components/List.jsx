import '../../src/App.css';
import { dataVehiculos } from "../data/dataVehiculos";



export const List = () => {

   
  return (
    <>
      <ul>
        {dataVehiculos.map((auto) => (
          <li key={auto.id}>{auto.marca}</li>
        ))}
      </ul>
    </>
  );
}
