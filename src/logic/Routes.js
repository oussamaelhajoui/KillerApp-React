import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "../components/Layout";

import { PrivateRoute } from "./Libary";

import { connect } from "react-redux";
import { logIn } from "../actions/loginAction";
import { checkLogin } from "../actions/checkLoginAction";

import Dashboard from '../components/pages/Dashboard'
import Login from '../components/pages/Login'

import Page404 from '../components/pages/Page404'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    {!this.props.user.loggedIn && <PrivateRoute exact path="/" component={Login} user={this.props.user} />}
                    {(this.props.user.userRole === 1) ? <PrivateRoute exact path="/" component={Dashboard} user={this.props.user} /> : ""}
                    <Route
                        path="/login"
                        render={(...n) => (
                            <Login
                                {...n}
                            />
                        )}
                    />
                    <Route component={Page404} />
                </Switch>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default withRouter(
    connect(mapStateToProps, { logIn, checkLogin })(Routes)
);
