import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PokeContext = createContext();

const PokeProvider = (props) => {
   const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
   const [pokemons, setPokemons] = useState([]);
   const [searchInput, setSearchInput] = useState('');
   const [prev, setPrev] = useState();
   const [next, setNext] = useState();

   const fetchData = async() => {
      setPokemons([])
      const { data } = await axios.get(URL)
      if(data.next){
         setNext(data.next)
      }
      if(data.previous){
         setPrev(data.previous)
      }
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

   useEffect(() => {
      fetchData()
   }, [])


   const HandleNext = () => {
      if(next){
         setURL(next)
      }
      
   }

   const HandlePrev = () => {
      if(prev){
         setURL(prev)
      }
   }

   const handleSearch = (e) => {
      setSearchInput(e.target.value)
   }


   const value = { pokemons : pokemons.filter(pokemon => pokemon.name.includes(searchInput)), setPokemons, HandleNext, HandlePrev, handleSearch}
   return <PokeContext.Provider value={value}  {...props}/>
   
}
export { PokeProvider, PokeContext }


