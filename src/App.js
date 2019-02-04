import React, { Component } from 'react';
import Header from './Components/Header';
import Jumbotron from './Components/Jumbotron';
import Card from './Components/Card';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'Free',
          price: '$0',
          list: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
          ],
          buttonTitle: 'Sign up for free',
          buttonColor: 'btn-outline-primary'
        },
        {
          title: 'Pro',
          price: '$15',
          list: [
            '20 users included',
            '10 GB of storage',
            'Priority email support',
            'Help center access'
          ],
          buttonTitle: 'Get started',
          buttonColor: 'btn-primary'
        },
        {
          title: 'Enterprise',
          price: '$29',
          list: [
            '30 users included',
            '15 GB of storage',
            'Phone and email support',
            'Help center access'
          ],
          buttonTitle: 'Contact us',
          buttonColor: 'btn-primary'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App" id="top">
        <Header />
        <Jumbotron />
        <div className="container">
          <Card cards={this.state.cards} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
