import { useState } from 'react';
import foods from '../../foods.json';
//import { Button, Card, Col, Container, Row } from 'react-bootstrap/Card';
//import { Button, Card, Col, Container, Row } from 'antd';

export default function FoodCard() {
  const [comidas, setFoods] = useState(foods);

  return (
    <>
      {comidas.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            <img src={item.image} />
          </>
        );
      })}
    </>
  );
}
