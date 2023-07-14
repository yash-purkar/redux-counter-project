import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { incrementNumber, decrementNumber } from './actions';

function App() {
  const allState = useSelector((state) => state)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementNumber());
  }

  const handleDecrement = () => {
    if (allState?.changeNumber > 0) dispatch(decrementNumber())
  }


  return (
    <div className="App">
      <div>
        <h1>INCREMENT/DECREMENT COUNTER</h1>

        <div className='btn-box'>
          <button onClick={handleDecrement} className='dec'>
            -
          </button>
          <p>{allState?.changeNumber}</p>
          <button onClick={handleIncrement} className='inc'>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


// The changeNumber is a function then how the value is coming?
// => The reducer contains all the data of the application