import{BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Pokemon from "./components/Pokemon/Pokemon"

function App() {
  
  return (

//https://pokeapi.co/api/v2/pokemon/pikachu

<Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon" element={<Pokemon/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
