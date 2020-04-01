import React, { useState } from 'react';
import CardList from './components/CardList.jsx'
import InputForm from './components/InputForm.jsx'
import './App.css';

function App() {
  const [cards, SetCards] = useState([])

  const addNewCard = cardInfo => {
    SetCards([...cards, cardInfo])
  }

  return (
    <div>
      <InputForm onSubmit={addNewCard}/>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
           