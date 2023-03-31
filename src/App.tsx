
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { GalleryPage } from './pages/GalleryPage';
import CssBaseline from '@mui/material/CssBaseline';
import { ContactList } from './components/ContactList';




function App() {
  return (
    <> 

        <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/contactlista" element={<ContactList/>} />
        </Routes>
      </BrowserRouter>

      </>
  )
}

export default App
