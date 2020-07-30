import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = ({ logoutUser, isUserLoggedIn }) => {
    if (isUserLoggedIn) {
        return (
            <div className="NavContainer">
                <ul className="nav nav-tabs justify-content-end">
                    <li id="nameOnNav" className="nav-item">
                        <h2>Good Habit ASAP</h2>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" ><p className="navItemName">Profile</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addHabit" ><p className="navItemName">Add a Habit</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" ><p className="navItemName">About</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" ><p className="navItemName">Users</p></Link>
                    </li>
                    <li>
                    <div>
                        <button id="logOutButton" className="btn btn-secondary" onClick={logoutUser}>Log out</button>
                    </div>
                        
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className="NavContainer">
            <ul className="nav justify-content-end">
                <li id="nameOnNav" className="nav-item">
                    GoodHabitASAP
                </li>
                <li className="nav-item">
                   <Link to="/about" >About</Link>
                </li>
                <li className="nav-item">
                   <Link to="/users" >Users</Link>
                </li>
            </ul>
        </div>
  );
}

export default Nav;