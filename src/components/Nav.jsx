import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <div>
                <NavLink to={'/'}>Inicio</NavLink>
                <NavLink to={'noticias'}>Noticias</NavLink>
                <NavLink to={'mortandad'}>Mortandad</NavLink>
            </div>
        </nav>
    )
}

export default Nav