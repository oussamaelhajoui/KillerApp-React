import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";

import Layout from "../components/Layout";

import { PrivateRoute } from "./Libary";

import { connect } from "react-redux";
import { logIn } from "../actions/loginAction";
import { checkLogin } from "../actions/checkLoginAction";

import Dashboard from '../components/pages/Dashboard'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    {/* {!this.props.user.loggedIn && <PrivateRoute exact path="/" component={Login} user={this.props.user} />} */}
                    {(this.props.user.userRole === 1) ? <PrivateRoute exact path="/" component={Dashboard} user={this.props.user} /> : ""}
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
