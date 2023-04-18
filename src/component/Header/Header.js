import { Row, Col } from 'react-bootstrap';
import logo from '../../assests/hs.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import HeaderContent from './HeaderContent';

function Header() {
    return (
        <div className="header">
            <a>
                <img className='logo-img' src={logo}></img>
            </a>
            <a className="menu-button">
                <span>Menu</span><FontAwesomeIcon icon={faBars} />
            </a>

        </div>
    )
}

export default Header;