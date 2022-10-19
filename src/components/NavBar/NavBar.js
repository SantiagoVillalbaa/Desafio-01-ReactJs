import logo from '../../img/logo.jpeg'
import './NavBar.css'
import CartWiget from '../CardWiget/CartWiget'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <header>
            <h2 className='baner-text'>Atencion medica para todos</h2>
            <div className='logoNombre'>
                <NavLink to={'/'}>
                    <img className='logo' src={logo}  alt="logo" />
                </NavLink>
            </div>
            <ul className='navegacion'>
                <li> <NavLink to={'/category/Belleza'}>Belleza</NavLink></li>
                <li><NavLink to={'/category/CiudadoPersonal'}>Ciudado Personal</NavLink></li>
                <li><NavLink to={'/category/HogaryAlimentos'}>Hogar y Alimentos</NavLink></li>
                <NavLink style={{textDecoration: "none"}} to={'/cart'}>
                    <CartWiget/>
                </NavLink>
            </ul>
        </header>
    )
}

export default NavBar
