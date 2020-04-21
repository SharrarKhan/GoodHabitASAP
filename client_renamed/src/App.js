import React from 'react';
import './App.css';
import AuthContainer from './Containers/AuthContainer';
import Landing from "./Components/Landing";
import About from "./Components/About";
import Nav from "./Components/Nav";
import PrivateRoute from './Components/PrivateRoute';
import Users from './Components/Users';
import NewYorkCityTrashCans from "./Components/NewYorkCityTrashCans";
import AddHabitForm from "./Components/AddHabitForm";
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from "axios";

class App extends React.Component {
  state = {
    user: null,
    isUserLoggedIn: false,
    loadingUser: true
  }

  setUser = (user) => {
    console.log('setting user to app state');
    this.setState({
      user: user,
      isUserLoggedIn: true, // Since the first thing we do on componentDidMount is to check if the user is logged in in our backend
      loadingUser: false
    });
  }

  componentDidMount() {
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn = async () => {
    console.log('Checking if user logged in');
    try {
      const { data } = await axios.get("/auth/isUserLoggedIn");
      this.setUser(data.payload);
    } catch (err) {
        // User does not have an active session in the backend. User is logged out so set loadingUser to false.
        if (err.message.includes(401)) {
          this.setState({
            loadingUser: false
          });
        }
    }
  }

  logoutUser = async () => {
    console.log('logging out user');
    try {
      await axios.get('/auth/logout');
      this.setState({
        user: null,
        isUserLoggedIn: false
      });
      this.props.history.push('/'); // Redirect user to / (home)

    } catch (err) {
      console.log('ERROR', err);
    }
  }

  renderAuthContainer = (routeProps) => {
    return (
      <AuthContainer
        setUser={this.setUser}
        isUserLoggedIn={this.state.isUserLoggedIn}
        {...routeProps}
      />); // the spreader has history, location and match, it passes it to the component
  }

  render() {
    const { isUserLoggedIn, loadingUser } = this.state;

    return(
      <div className="App">
        <Nav 
          logoutUser={this.logoutUser}
          isUserLoggedIn={isUserLoggedIn}
        />
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/login" render={this.renderAuthContainer} />
            <Route path="/signup" render={this.renderAuthContainer} />
            <Route path="/NYCTrashCans" component={NewYorkCityTrashCans} />
            <PrivateRoute path="/addHabit" component={AddHabitForm} isUserLoggedIn={isUserLoggedIn} />
            <PrivateRoute path="/users" component={Users} isUserLoggedIn={isUserLoggedIn} />
            <PrivateRoute path="/profile" render={() => <h1> Profile </h1>} isUserLoggedIn={isUserLoggedIn} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);