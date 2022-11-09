// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ item }) {
  return (
    <Col>
      <Card title={item.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={item.image} height={60} alt="food" />
        <p>Calories: {item.calories}</p>
        <p>Servings: {item.servings}</p>
        <p>
          <b>Total Calories: {item.calories * item.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
