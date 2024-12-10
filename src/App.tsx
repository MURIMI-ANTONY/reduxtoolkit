import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./store";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <nav>
        <Link to="/">Home</Link><br></br>
        <Link to="/login">Login</Link><br></br>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
