import Card from 'react-bootstrap/Card';
import React from 'react'

export default function AddImage(props) {
    const cardImgStyle ={
        borderRadius : '7%',
        height : '70vh'
    };
  return (
    <>
    <div className="cards">
    <Card style ={{borderRadius : '7%'}}>
        <Card.Img style = {cardImgStyle} variant="top" src={props.i} />
      </Card>
      <br />
    </div>
    </>
  )
}


