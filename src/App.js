import logo from './logo.svg';
import './App.css';
import { MyStore } from './Context/Store';

function App() {
  const { name, setName } = MyStore();
  return (
    <div className="App">
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
