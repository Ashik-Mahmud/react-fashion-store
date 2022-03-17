import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Mobile from './components/Mobile/Mobile';
import Home from './components/Pages/Home';

function App() {
    const [cart, setCart] = useState(0);
  return (
    <>
    <BrowserRouter>
     <Header cart={cart} />
     <Routes>
         <Route path='/' element={<Home setCart={setCart} cart={cart}/>} />
         <Route path='/mobile' element={<Mobile />} />
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
