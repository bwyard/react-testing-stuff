import './App.css';
import Products from './Products'
import {Button} from 'react-bootstrap';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
      <Rating rating ='1' />
      <Rating rating ='2' />
      <Rating rating ='3' />
      <Rating rating ='4' />
      <Rating rating ='5' />
    </div>
  );
}

export default App;
