import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PokeContext = createContext();

const PokeProvider = (props) => {
   const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
   const [pokemons, setPokemons] = useState([]);
   const [prev, setPrev] = useState();
   const [next, setNext] = useState();

   const fetchData = async() => {
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
      console.log(pokemons)
   }

   useEffect(() => {
      fetchData()
   }, [URL])


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



   const value = { pokemons, setPokemons, HandleNext, HandlePrev}
   return <PokeContext.Provider value={value}  {...props}/>
   
}
export { PokeProvider, PokeContext }


