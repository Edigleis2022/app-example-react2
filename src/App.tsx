
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GalleryPage } from './pages/GalleryPage';
import CssBaseline from '@mui/material/CssBaseline';





function App() {
  return (
    <>

      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
