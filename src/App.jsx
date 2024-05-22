import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/Counter';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <Counter />
    </div>
  );
}

export default App;
