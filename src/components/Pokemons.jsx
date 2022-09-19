import { Layout, Row, Col, Typography, Spin, Progress, Pagination } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../context/pokemonContext'
import { LoadingOutlined } from '@ant-design/icons';
import { colorFilter } from '../functions/color';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography

const Pokemon = ({ data }) => {
   let style = {
      padding: '10px',
      borderRadius:'3px'
   }
   const {stats, sprites, types} = data
   return (
      <Col className="gutter-row" xs={24} md={12} xl={6} style={{ padding:'5px'}} >
         <Link to={`/${data.name}`} >
            <Row style={colorFilter( style, types[0].type.name)}>
               <Col span={15} style={{paddingRight:'10px'}}>
                  <Title level={3} style={{textTransform:'capitalize', fontWeight:'bolder'}}>{data.name}</Title>
                  {
                     types ? types.map((type1, index) => {
                        let { type } = type1
                        let typeStyle = {
                           fontSize:'11px', padding: '3px 10px',borderRadius:'50px',color:'black', fontWeight:'bold', margin:'0 5px'
                        }
                        // console.log(type)
                        return <Text style={colorFilter(typeStyle, type.name )} key={index}>{ type.name }</Text>
                     }) : <Progress/>
                  }
                  
               </Col>
               <Col span={9} id="cardImg" style={{ display:'flex', alignItems:'center', background:'url(../assets/pokeBG.png)'}}>
                  <img src={sprites.front_default} style={{width:'7em'}}/>
               </Col>
            </Row>
         </Link>
      </Col>   
   )
}

const antIcon = (
   <LoadingOutlined
      style={{
         fontSize: 24,
      }}
      spin
   />
);

const Pokemons = () => {
   const { pokemons } = useContext(PokeContext)
   const [currentList, setCurrentList] = useState();
   const [currentPage, setCurrentPage] = useState(1);
   const [perPage, setPerPage] = useState(20);
  
   useEffect(() => {
      setList()
   }, [pokemons, currentPage,perPage])


   const setList = () => {
      let indexofLast = currentPage * perPage
      let indexofFirst = indexofLast - perPage
      pokemons ? setCurrentList(pokemons.slice(indexofFirst, indexofLast)) : console.log('')
   }

   const setPagination = value => {
      setCurrentPage(value)
   }
   const setPageLimit = (current, size) => {
      setPerPage(size)
      // console.log(current, size)
   }

   return (
      <Layout style={{padding: ' 1rem 4rem', height: 'calc(100vh - 64px)', overflowX: 'scroll', backgroundColor:'white'}}>
         <Row gutter={14}>
            {
               currentList ? currentList.map((pokemon, index) => {
                  return <Pokemon data={pokemon} key={index}/>
               }) : <Spin indicator={antIcon} />
            }
         </Row>
         <Row>
            <Pagination defaultCurrent={currentPage} pageSize={perPage} total={1000} onChange={setPagination} onShowSizeChange={setPageLimit}/>
         </Row>

      </Layout>
   )
}


export default Pokemons