import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="image-heading-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <p className="para">Wave</p>
    </div>

    <ul className="nav-menu">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-link">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
