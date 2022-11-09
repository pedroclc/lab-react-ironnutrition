import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foods from './foods.json';
//import FoodCard from './components/FoodCard/FoodCard';
import FoodBox from './components/FoodBox/FoodBox';

function App() {
  return (
    <div className="App">
      {/* <FoodCard /> */}
      {/* <FoodBox {...foods[1]} /> */}
      {foods.map((current) => {
        return (
          <>
            <FoodBox item={current} />
          </>
        );
      })}
    </div>
  );
}

export default App;
