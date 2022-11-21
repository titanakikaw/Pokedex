import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout, Row, Col, Typography, Progress} from 'antd'
import { colorFilter } from './functions/color';
const Pokemon = () => {
   const { id } = useParams();
   const [pokemon, setPokemon] = useState();
   const fetchData = async() => {
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const { data } = await axios.get(url)
      if(data){
         setPokemon(data)
      }
      
   }
   const { Title } = Typography
   useEffect(() => {
      fetchData();
   }, [])
  


   let { stats } = pokemon ? pokemon : '';
   let { types } = pokemon ? pokemon : '';



   let style = {
      padding: ' 1rem 4rem',
      height: 'calc(100vh - 64px)',
      overflowX: 'scroll',
      display:'flex', 
      alignItems:'center',  
      justifyContent:'center'
   }
   return ( 
      <Layout 
         style={ types ? colorFilter(style, types[0].type.name) : {backgroundColor : '#f3f3f3'}}
      >
         <Row
            style={{
               width: '80%',
               height: '100%'
            }}   
         >
            <Col className="gutter-row" 
               style={{
                  width:'fit-to-content', 
                  padding:'2rem',
                  display :'flex',
                  justifyContent:'space-between',
                  alignItems : 'center',
                  background: "url(./assets/pokeBG.png)"
               }} 
               xs={24}
               md={12}
            >
               <img src={ pokemon ? pokemon.sprites.other.dream_world.front_default : ''} 
                  style={{
                     width:'100%'
                  }}
               />
            </Col>
            <Col className="gutter-row" 
               style={{ 
                  borderTopRightRadius:'15px', 
                  borderTopLeftRadius:'15px', 
                  padding:'1rem 10px'
               }} 
               xs={24}
               md={12}
            >
               <Row gutter={13}>
                  {
                     types ? types.map((type) => 
                        <Col>
                           <Typography.Text style={{ fontWeight:'bolder', textTransform:'capitalize'}}>{type.type.name}</Typography.Text>
                        </Col>
                     ) : 'Loading'
                  }
               </Row>
               <Title
                  style={{
                     letterSpacing:'2px', 
                     textTransform: 'uppercase',
                     fontSize:'54px',
                     marginBottom:'5px'
                  }}
               >
                  { pokemon ? pokemon.name : 'Loading'}
               </Title>
               <Typography.Text style={{fontSize:'12px', fontWeight:'bold'}}>Height : { pokemon ? pokemon.height : '' }m - </Typography.Text>
               <Typography.Text style={{fontSize:'12px', fontWeight:'bold'}}>Width : {  pokemon ? pokemon.weight : '' }KG</Typography.Text>
               <hr></hr>
               {
                  stats ? stats.map(item => 
                     <Row style={{
                        marginTop:'10px'
                     }}>
                        <Col span={7} >
                           <Typography.Text
                              style={{
                                 textTransform : 'uppercase',
                              }}
                           >
                              { 
                                 item.stat.name + ': '
                              }
                           </Typography.Text>
                        </Col>
                        <Col span={17}>
                           <Progress style={{ height:'20px'}} percent={item.base_stat} format={percent => percent}></Progress>
                        </Col>
                     </Row>
                  ) : 'Loading'
               }
             
            </Col>
         </Row>
      </Layout>
  )
}

export default Pokemon