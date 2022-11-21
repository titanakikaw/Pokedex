import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PokeContext = createContext();

const PokeProvider = (props) => {
   const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
   const [pokemons, setPokemons] = useState([]);
   const [pokemon, setPokemon] = useState([]);
   const [searchInput, setSearchInput] = useState('');

   useEffect(() => {
      fetchData()
   }, [])

   const fetchPokemon = async(id) => {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      if(data)
      {
         setPokemon(data)
      }
      console.log(data)
   }

   const fetchData = async() => {
      setPokemons([])
      const { data } = await axios.get(URL)
      if(data){
         fetchDetails(data.results)
      }
   }

   const fetchDetails = (entities) => {
      entities.map(async(entity, index) => {
         const { data } = await axios.get(entity.url);
         setPokemons(state => {
            return state ? state = [...state, data] : ''
         })
      })
   }

   const handleSearch = (e) => {
      setSearchInput(e.target.value)
   }


   const value = { pokemon, pokemons : pokemons.filter(pokemon => pokemon.name.includes(searchInput)), setPokemons, handleSearch, fetchPokemon }
   return <PokeContext.Provider value={value}  {...props}/>
   
}
export { PokeProvider, PokeContext }


