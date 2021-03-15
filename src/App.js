import './App.css';
import './Navbar.css';
import ButtonAppBar from './Navbar.js';

export default function App() {
  return (
    <div>
      <div>
        <ButtonAppBar/>
        <ul className="slideshow">
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
      </div>
    </div>
  );
}
