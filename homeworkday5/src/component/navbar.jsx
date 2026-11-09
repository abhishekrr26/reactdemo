import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className={(data)=>(data.isActive?'active':'neutral')} >
                    Home
                </NavLink>
                </li>
                 <li className="nav-item">
                <NavLink to={"/contact"} className={(data)=>(data.isActive?'active':'neutral')} >
                    Contact
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={"/about"} className={(data)=>(data.isActive?'active':'neutral')} >
                    About us
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;