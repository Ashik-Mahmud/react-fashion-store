import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';

function App() {
    const [cart, setCart] = useState(0);
  return (
    <>
    <Header cart={cart} />
    <Home setCart={setCart} cart={cart}/>
   </>
  );
}

export default App;
