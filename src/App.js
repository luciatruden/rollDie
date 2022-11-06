import logo from './logo.svg';
import './App.css';
import RollButton from './RollButton';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <div className='App-die'>
        <Dice />
        <Dice />
      </div>
      
      <RollButton />
    </div>
  );
}

export default App;
