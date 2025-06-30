
import './App.css'
import { Card } from './components/Card'
import { List } from './components/List'
import { NewCard } from './components/NewCard'

function App() {
  return (
    <>
      <h1>Mi App de Usuarios</h1>
      <Card nombre="Luciano Gomez" />

      <h2>Lista de Autos</h2> 
      <List />

      <h1>App de Noticias</h1>
      <NewCard 
      title={"Algo"} 
      description={"una descripcion"} 
      source={"www.infobae.com"} 
      image={"https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60"} />

    </>
  )
}

export default App
