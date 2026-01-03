import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <nav>
                <NavLink to={'/'}>Inicio</NavLink>
                <NavLink to={'noticias'}>Noticias</NavLink>
                <NavLink to={'mortandad'}>Mortandad</NavLink>
            </nav>
            <img src='img/propagandaFooter.png' alt='Propaganda del sitio' />
            <p>&copy; 2025 COVID-19 y su impacto en la sociedad. Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer