import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitHub } from '@fortawesome/free-solid-svg-icons';

function HeaderFooter() {
    return (
        <div className='header-footer'>
            <a href="#"><FontAwesomeIcon icon={faGitHub} /></a>
            <a href="#">linkdIn</a>
        </div>
    )
}

export default HeaderFooter;