import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardList from './components/CardList.jsx'
import InputForm from './components/InputForm.jsx'
import UserProfile from './components/UserProfile'
import './App.css';

function App() {
  const [cards, SetCards] = useState([])

  const addNewCard = cardInfo => {
    SetCards([...cards, cardInfo])
  }

  return (
    <Router>
      <div>
        <Route path='/' exact render={() => <InputForm onSubmit={addNewCard} />} />
        <Route path='/' exact render={() => <CardList cards={cards} />} />
        <Route path='/user/:username?' component={UserProfile} />
      </div>
    </Router>
  );
}

export default App;
           