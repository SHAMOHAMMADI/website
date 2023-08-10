import './App.css'
import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Not404 from './pages/Not404'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Partners from './pages/Partners'
import ContactUs from './pages/ContactUs'
import LogIn from './pages/LogIn'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="*" element={<Not404/> } />
        <Route path="/" element={<Home/> } />
        <Route path="/home" element={<Home/> } />
        <Route path="/Products" element={<Products/> } />
        <Route path="/Projects" element={<Projects/> } />
        <Route path="/Partners" element={<Partners/> } />
        <Route path="/ContactUs" element={<ContactUs/> } />
        <Route path="/Login" element={<LogIn/> } />
      </Routes>
      </header>
    </div>
  );
}

export default App;
