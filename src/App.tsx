import './App.css'
import { Gallery } from './components/Gallery'
import { MenuItem } from './components/MenuItem'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/StateExample'
import {BrowerRouter,Routes,Route} from 'react-rout-dom'


function App() {
  return (
    <div id="App">
     <BrowerRouter>
      <Routes>
        <Route paht="/" element={<Home/>}/>
        <Route paht="/gallery" element={<Gallery/>}/>
      </Routes>
     </BrowerRouter>
       
    </div>
  )
}

export default App
