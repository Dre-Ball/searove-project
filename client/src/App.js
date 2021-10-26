import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';  
import TripsPage from './pages/trips/trips.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    //this.unsubscribeFromAuth = auth.onAuthStateChanged( (user) => {
      //return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    //});
    this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(setCurrentUser);
      }

      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route 
            exact
            path='/trips' 
            render={() => 
              this.props.currentUser ? (
                <TripsPage />
              ) : (
                <SignInAndRegisterPage />
              )
            }
          /> 
          <Route 
            exact
            path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to ='/trips' /> 
              ) : (
                <SignInAndRegisterPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
