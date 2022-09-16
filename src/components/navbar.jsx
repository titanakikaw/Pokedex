import { Layout, Typography, Input, Menu } from 'antd';
import React, { useContext } from 'react'
import { PokeContext } from '../context/pokemonContext';

const { Header } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const Navbar = () => {
   const { pokemons } = useContext(PokeContext)

   return (
      <Header style={{backgroundColor:'#f74a4a', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
         <div className="logo">
            <Title style={{padding : '10px 1rem', color:'white', margin:'0px'}}>Pokédex</Title>
         </div>
         <Menu style={{backgroundColor:'transparent', border:'0',height: 'fit-content'}}>
            <Menu.Item style={{backgroundColor:'transparent', height:'inherit'}}>
               <Search placeholder="Search pokemon. . . "  style={{width: 350, backgroundColor:'#cf3c3c'}}/>
            </Menu.Item>
         </Menu>
      </Header>
   )
}

export default Navbar