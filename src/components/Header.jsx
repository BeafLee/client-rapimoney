import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className='container'>
            <Link className='linkBtn loginBtn' to={'/login'}>
                Login
            </Link>
            <h1>Home</h1>
            <Link className='linkBtn' to={'/new'}>
                New Client
            </Link>
        </div>
    )
}

export default Header;