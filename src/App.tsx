import './App.css';
import { Gallery } from './components/Gallery';
import { MenuItem } from './components/MenuItem';
import { NavBarMenu } from './components/NavBarMenu';
import { Home } from './pages/Home';
import { StateExample } from './pages/StateExample';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import { Agendas } from './components/Agendas'


function App() {
  return (
    <div id="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
     </BrowserRouter>
       
    </div>
  )
}

export default App
