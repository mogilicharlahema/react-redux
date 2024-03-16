import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from './redux/actions';

function App() {

 const{count}= useSelector(state=>state)
 const dispatch=useDispatch()
 const handleClick=()=>{
  dispatch(incrementAction())

 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {count}
        </p>
        
        <button onClick={handleClick}>increment counter</button>
      
      </header>
    </div>
  );
}

export default App;
