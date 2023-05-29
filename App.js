import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div>
    <fragment>
      <div className='Header'>
        Phone Directory
      </div>
      <button> Add </button>
      <div>
        <span> Name </span> <br />
        <span> Phone </span>
      </div>
      <label htmlFor="name"> Name: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue="Aayush"/>
      </fragment>
    // </div>
  )
}

export default App;
