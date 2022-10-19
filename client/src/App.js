import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const dogsState = useSelector(state => state.dogs);
  console.log(dogsState);


  return (
    <div className="App">
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
