import React, { useContext, useEffect, useState } from 'react'
import { Modal, Row, Col, Typography } from 'antd'
import { PokeContext } from '../context/pokemonContext'

const { Title, Text } = Typography

const ModalComponent = ({ open, handleModal }) => {
    const { pokemon } = useContext(PokeContext)
    return (
        <Modal open={open} title="Discover Pokemon" onOk={() => handleModal()}>
            {
                pokemon ? 
                    <Row gutter={10}> 
                        <Col style={{border:'1px solid #f3f3f3', borderRadius:'8px', padding: '8px 1rem',  boxShadow: '8px 11px 5px -4px rgba(0,0,0,0.19)'}} span={12}>
                            <Title level={5} style={{textTransform:'uppercase'}}>{pokemon.data.name}</Title>
                        </Col>
                        <Col span={12}>
                            <img src={pokemon.data.sprites.other.dream_world.front_default} style={{width:'7rem'}}/>
                        </Col>
                    </Row>
                : ''   
            }
            
        </Modal>
    )
}

export default ModalComponent