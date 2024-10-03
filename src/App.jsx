import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import About from "./About"
import Posts from './Posts';
import Shop from './Shop';

function App() {
  return (
   <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to="/posts?fname=kittipong&lname=prasompong">Post Greeting</Link>
        </li>
        <li>
          <Link to='/posts/1'>Post Id 1</Link>
        </li>
        <li>
          <Link to='/posts/2'>Post Id 2</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/posts/:id' element={<Posts/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
