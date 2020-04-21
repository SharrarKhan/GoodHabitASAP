import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import NYCTrashCans from "../Components/NewYorkCityTrashCans";

class DropdownNavElement extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Cities
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/NYCTrashCans">
            <p className="dropDownCityOption">New York City</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default DropdownNavElement;