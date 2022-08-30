/* import logo from '../logo.svg' */
import logo from '../logo.jpeg'

const NavBar = () => {
    return (
        <header className='navbar-contenedor'>
            <div className='logoNombre'>
                <img className='logo' src={logo}  alt="logo" />
                <h2>Atencion medica para todos</h2>
            </div>
            <ul className='navegacion'>
                <li><a href='#'>Belleza</a></li>
                <li><a href='#'>Bebes</a></li>
                <li><a href='#'>Ciudado Personal</a></li>
                <li><a href='#'>Hogar y Alimentos</a></li>
            </ul>
        </header>
    )
}

export default NavBar