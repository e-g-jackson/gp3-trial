import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item nav-item-1">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/food">Food Tracker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/types">Food Types</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/progress">Progress</a>
                        </li> */}
                        <li className="nav-item nav-item-1">
                            <Link to="/profile">
                                <div className = "nav-link">   
                                    Profile
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/food">
                                <div className = "nav-link">   
                                    Food Tracker
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/types">
                                <div className = "nav-link">   
                                    FoodTypes
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/progress">
                                <div className = "nav-link">   
                                    Progress
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;