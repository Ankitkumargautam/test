import logo from './logo.svg';
import './App.css';
import { MyStore } from './Context/Store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';

function App() {
  // const { name, setName, state, dispatch } = MyStore();

  const { name, setName } = MyStore();

  // const handleEmail = (email) => {
  //   dispatch({ type: 'UPDATE_EMAIL', payload: email });
  // };

  const contact = useSelector((state) => state.contactReducer.contact);

  const dispatch = useDispatch();
  const handleContact = (contact) => {
    dispatch({ type: 'UPDATE_CONTACT', payload: contact });
  };

  const [counter, setCounter] = useState(0);
  const handleCounterInc = useCallback(() => {
    // setCounter(counter + 1);
    console.log('useCallback..');
    return counter * 2;
  }, [counter]);

  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('calculating...');
    return count * 100;
  }, [count]);
  return (
    <div className="App">
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* <h1>{state.email}</h1>
      <input
        value={state.email}
        onChange={(e) => handleEmail(e.target.value)}
      /> */}
      <h1>{contact}</h1>
      <input value={contact} onChange={(e) => handleContact(e.target.value)} />

      <h1>Counter using useCallback </h1>
      <ChildComponent callback={handleCounterInc} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click to inc</button>

      <h1>Counter using useMemo </h1>
      <p>expensive calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Inc count</button>
    </div>
  );
}

const ChildComponent = ({ callback }) => {
  return (
    <>
      <div onClick={callback}> callback: {callback()}</div>
    </>
  );
};

export default App;
