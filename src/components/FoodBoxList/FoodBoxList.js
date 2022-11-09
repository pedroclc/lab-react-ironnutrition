import { useState } from 'react';
import foods from '../../foods.json';
import { Card, Col, Button } from 'antd';

export default function FoodBoxList() {
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
