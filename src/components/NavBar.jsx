import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <div id="navBarTitle">
        <Link to="/" >Marianne Anderson</Link>
        </div>
            <ul className="navBarLinks">
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>                
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
