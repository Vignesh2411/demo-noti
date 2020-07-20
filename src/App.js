import React, { Component } from 'react';
import classes from './App.module.css';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Noti from './containers/Noti/Noti';
import * as actions from './store/actions/index';

import { Notifications } from 'react-push-notification';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" component={Auth} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>         
          <Route path="/logout" component={Logout} />
          <Route path="/noti" exact component={Noti} />
          <Redirect to="/noti" />
        </Switch>
      );
    }

    return (
       <div> 
         <Notifications />           
          {routes}      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
