import logo from './logo.svg';
import './App.css';
import { MyStore } from './Context/Store';

function App() {
  const { name, setName, state, dispatch } = MyStore();

  const handleEmail = (email) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: email });
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>{state.email}</h1>
      <input
        value={state.email}
        onChange={(e) => handleEmail(e.target.value)}
      />
    </div>
  );
}

export default App;
