
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { BaseLayout } from './Layout/BaseLayout';






function App() {
  return (
    <>

      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
                    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
