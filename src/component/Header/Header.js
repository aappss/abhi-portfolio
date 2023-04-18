import { Row, Col } from 'react-bootstrap';
import logo from '../../assests/hs.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <div className="header">
                    <a>
                        <img src={logo}></img>
                    </a>
                    <a className="menu-button">
                        <span>Menu</span><FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </Col>
        </Row>
    )
}

export default Header;