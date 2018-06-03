import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "../components/Layout";

import { PrivateRoute } from "./Libary";

import { connect } from "react-redux";
import { logIn } from "../actions/loginAction";
import { checkLogin } from "../actions/checkLogin";

import Dasboard from '../components/pages/Dasboard'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>

                </Switch>
            </Layout>
        );
    }
}

export default Routes;