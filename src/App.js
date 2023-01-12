import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './const/pages/Home';
import Navbar from './const/Navbar';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}





export default App;
