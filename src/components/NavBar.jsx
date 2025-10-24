import { Link } from "react-router-dom";

const NavBar = () => {

    function showSidebar() {
        const sidebar = document.querySelector(".sideBarLinks");
        sidebar.style.display = "flex";
    }

    function hideSidebar() {
        const sidebar = document.querySelector(".sideBarLinks");
        sidebar.style.display = "none";
    }

    return (
        <nav>
        <div id="navBarTitle">
        <Link to="/" >Marianne Anderson</Link>
        </div>
        <ul className="sideBarLinks">
                <li onClick={hideSidebar}><i class="fa-solid fa-xmark close"></i></li>
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
            <ul className="navBarLinks">
                <li className="hideOnMobile">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="hideOnMobile">
                    <Link to="/about">About</Link>
                </li>                
                <li className="hideOnMobile">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="hideOnMobile">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="menuButton" onClick={showSidebar}><i class="fa-solid fa-bars"></i></li>
            </ul>
        </nav>
    )
}

export default NavBar;
