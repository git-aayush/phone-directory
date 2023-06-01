import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

// let subscribers = [
    //   {
    //     id: 1,
    //     name: "Aayush",
    //     phone: "8080808080",
    //   },
    //   {
    //     id: 2,
    //     name: "Vaibhav",
    //     phone: "9090909090",
    //   }
    // ]

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }


  render() {
    
    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span>
            <spam className='grid-continer phone-heading'>Phone</spam>
          </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className='grid-item'>{sub.name}</span>
                <span className='grid-item'>{sub.phone}</span>
                <span className='grid-item action-btn-container'>
                  <button className='custom-btn delete-btn' onClick={this.clickHandler}>Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
    );
  }
}

export default App;
