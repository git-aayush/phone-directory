import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Aayush Tyagi',
                phone: '8080808080'
            },
            {
                id: 2,
                name: 'Vaibhav Saini',
                phone: '9090909090'
            }]
        }
    }

    deleteSubscriberHandler = (subscriberID) => {
        let subscribersList = this.state.subscribersList.List;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index){
            if(subscriber.id == subscriberId){
                subscriberInde = index;
            }
        }, this)
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
       
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path="/addSubscriber" render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}
export default PhoneDirectory;