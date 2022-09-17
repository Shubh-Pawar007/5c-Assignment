
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home';
import MoreDetails from './Components/moreDetails/MoreDetails';




function App() {
  return (
  <>
    
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/element/:id" element={<MoreDetails/>}/>
   </Routes>
  </>

  );
}

export default App;

