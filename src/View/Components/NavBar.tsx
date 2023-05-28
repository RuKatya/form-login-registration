import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavBar: FC = () => {
    const location = useLocation()

    return (
        <nav>
            {location.pathname !== "/" && (
                <NavLink to="/">Back</NavLink>
            )}
        </nav>
    )
}

export default NavBar
