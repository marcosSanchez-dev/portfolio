import { Link, NavLink } from 'react-router-dom'
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
const Sidebar = () => (
  <div className="nav-bar">
    <a className="logo" href="/">
      <img src={LogoM} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="marcos sanchez" />
    </a>
    <nav>
      <a href="/" rel="noreferrer">
        <FontAwesomeIcon icon={faHome} />
      </a>

      <a href="../About" rel="noreferrer" className="about-link">
        <FontAwesomeIcon icon={faUser} />
      </a>

      <a href="../Contact" rel="noreferrer" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
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
