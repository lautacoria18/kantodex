/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import './Gimnasio.css'
import './Moleculas/Lideres.js'
import { Lideres } from './Moleculas/Lideres';
export default function Gimnasio() {
  return (
    <div className='gim'>
    <div className='grid1'>
    { Lideres.map((lider, index) => {
      return(
    <Card className='cardB' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={lider.image} />
    <Card.Body>
      <Card.Title>{lider.name}</Card.Title>
      <Card.Text>
        {lider.description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
      );
    })}
   </div>
   </div>
  )
  
}
