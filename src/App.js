import React, { useContext } from 'react'
import Navbar from './components/navbar'
import { PokeProvider} from './context/pokemonContext'
import { Route, Routes } from 'react-router-dom'
import Pokemons from './components/Pokemons'


const App = () => {
  return (
    <PokeProvider>
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Pokemons/>}/>
        </Routes>
      </React.Fragment>
    </PokeProvider>
  )
}

export default App