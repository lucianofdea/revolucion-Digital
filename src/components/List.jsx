

export const List = () => {

    const marcaDeAutos = [
        { id: 1, marca: 'Toyota'},
        { id: 2, marca: 'Ford'},
        { id: 3, marca: 'Chevrolet'},
        { id: 4, marca: 'Renault'},
        { id: 5, marca: 'Nissan'},
    ]

  return (
    <>
      <h2>Lista de Marcas de Autos</h2>
      <ul>
        {marcaDeAutos.map((auto) => (
          <li key={auto.id}>{auto.marca}</li>
        ))}
      </ul>
    </>
  );
}
