import './App.css';
import Products from './Products'
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>
        Learn React Hooks
        <Products />
        <Button variant="danger">Default</Button>
      </h1>
    </div>
  );
}

export default App;
