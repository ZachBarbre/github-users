import React, { useState } from 'react';
import CardList from './components/CardList.jsx'
import InputForm from './components/InputForm.jsx'
import './App.css';

function App() {
  const [cards, SetCards] = useState([])
  console.log(cards, SetCards)
  return (
    <div>
      <InputForm />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
           