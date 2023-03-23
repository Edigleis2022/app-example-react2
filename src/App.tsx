import './App.css';
import { Gallery } from './components/Gallery';
import { MenuItem } from './components/MenuItem';
import { NavBarMenu } from './components/NavBarMenu';
import { Home } from './pages/Home';
import { StateExample } from './pages/StateExample';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Contacts } from './pages/Contacts';


//<Route path="/" element={<Home/>}/>
//<Route path="/gallery" element={<Gallery/>}/>

function App() {
  return (
    <div id="App">
     <BrowserRouter>
      <Routes>
        
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
     </BrowserRouter>
       
    </div>
  )
}

export default App
