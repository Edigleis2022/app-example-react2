import { House, User, Gear as Settings } from 'phosphor-react'
import './style.css'
import { Link } from 'react-router-dom'
export function NavBarMenu() {
    return (
        <>
            <nav className="navbar-menu">
            <Link to={`/`}><House size={20} /></Link>
            <a href="#"><User size={20} /></a>
            <a href="#"><Settings size={20} /></a>
            </nav>
        </>
    )
}