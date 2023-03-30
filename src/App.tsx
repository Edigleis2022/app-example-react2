import './App.css';
import { Register } from './pages/Register'

import { NavBarMenu } from './components/NavBarMenu';
import { Home } from './pages/Home';
import { GalleryPage } from './pages/GalleryPage'
import { StateExample } from './pages/StateExample';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/Login';



function App() {
  return (
    <div id="App">
      <BrowserRouter>
          <NavBarMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Gallery' element={<GalleryPage />} />
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/StateExemple' element={<StateExample />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
