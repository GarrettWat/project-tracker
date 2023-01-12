import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './const/pages/Home';
import Navbar from './const/Navbar';
import Signin from './const/pages/auth/Signin';
import Signup from './const/pages/auth/Signup';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}





export default App;
