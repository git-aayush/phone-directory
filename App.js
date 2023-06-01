import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Aayush",
      phone: "8080808080",
    },
    {
      id: 2,
      name: "Vaibhav",
      phone: "9090909090",
    }
  ]
  return (
    <div className = "component-container">
      <Header heading = "Phone Directory"/>
      <div className='component-body-container'>
        <button className='custom-btn add-btn'>Add</button>

        <div className='grid-container heading-container'>
          <span className='grid-item name-heading'>Name</span>
          <spam className='grid-continer phone-heading'>Phone</spam>
        </div>

        {
          subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className='grid-item'>{sub.name}</span>
              <span className='grid-item'>{sub.phone}</span>
              <span className='grid-item action-btn-container'>
                <button className='custom-btn delete-btn'>Delete</button>
              </span>
            </div>
          })
        }

      </div>
    </div>


  );
}

export default App;
