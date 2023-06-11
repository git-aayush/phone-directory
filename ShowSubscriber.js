import React, { Component } from 'react';
import './ShowSubscriber.css';
import Header from './Header.js';
import './common/common.css';
import {Link} from 'react-router-dom';

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

class ShowSubscriber extends Component {

  render() {

    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className='component-body-container'>
         <Link to="/add"><button className='custom-btn add-btn'>Add</button></Link>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span>
            <spam className='grid-continer phone-heading'>Phone</spam>
          </div>

          {
            this.props.subscribersList.map(sub => {
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

export default ShowSubscriber;