import { Layout, Typography, Input, Menu } from 'antd';
import React, { useContext, useState } from 'react'
import { PokeContext } from '../context/pokemonContext';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const Navbar = () => {
   const { pokemons, handleSearch } = useContext(PokeContext)
   return (
      <Header style={{backgroundColor:'#f74a4a', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
         <div className="logo">
            <Link to='/'>
               <Title style={{padding : '10px 1rem', color:'white', margin:'0px'}}>Pokédex</Title>
            </Link>
         </div>
         <Menu style={{backgroundColor:'transparent', border:'0',height: 'fit-content'}}>
            <Menu.Item style={{backgroundColor:'transparent', height:'inherit'}}>
               <Search placeholder="Search pokemon. . . "  style={{width: 350, backgroundColor:'#cf3c3c'}} onChange={e => handleSearch(e)}/>
            </Menu.Item>
         </Menu>
      </Header>
   )
}

export default Navbar