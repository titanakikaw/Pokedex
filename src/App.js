import React from 'react'
import Navbar from './components/navbar'
import { PokeProvider} from './context/pokemonContext'
import { Route, Routes } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import Pokemon from './Pokemon'


const App = () => {
  return (
    <PokeProvider>
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Pokemons/>}/>
          <Route path='/:id' element={<Pokemon/>}/>
        </Routes>
      </React.Fragment>
    </PokeProvider>
  )
}

export default App