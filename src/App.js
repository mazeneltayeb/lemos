import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './nav/Navbar';
import { Route, Routes } from 'react-router';
import Home from './home/home';
import Menu from './menu/Menu';

function App() {
 
  return (
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="mune" element={<Menu/>}/>
      </Routes>
      </>
  );
}

export default App;
