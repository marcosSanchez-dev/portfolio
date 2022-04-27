import './sidebar.scss'
import LogoM from '../../assets/images/logo-m-nuevo.png'
import LogoSubtitle from '../../assets/images/mar_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faSoundcloud,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/" target="_blank" rel="noopener noreferrer">
      <img src={LogoM} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="marcos sanchez" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faHome} />
      </NavLink>

      <NavLink
        activeclassname="active"
        className="about-link"
        to="/about"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>

      <NavLink
        activeclassname="active"
        className="contact-link"
        to="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/gridMusicMx"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} color="#d1ccdc" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/marcosSanchez-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#d1ccdc" />
        </a>
      </li>
      <li>
        <a
          href="https://soundcloud.com/grid_tron"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} color="#d1ccdc" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/grid_musicmx/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="#d1ccdc" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
