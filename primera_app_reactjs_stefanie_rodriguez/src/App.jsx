import "./App.css"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import {ItemListContainer} from "./components/pages/ItemListContainer"


function App() {

  return (

    <div>
      <Navbar />
      <h1>Primera app ReactJs</h1>
      <ItemListContainer Greeting= "Bienvenidos a nuestra pagina"/>
      <Footer />
    </div>
  )
}

export default App
