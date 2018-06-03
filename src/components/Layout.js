import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import "../assets/css/main.css";

import { connect } from "react-redux";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { checkLogin } from "../actions/checkLoginAction";

const theme = createMuiTheme();

class Layout extends Component {

    constructor(props) {
        super(props);

        this.props.checkLogin();
    }

    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={0}>
                        {this.props.user.loggedIn && (
                            <Grid item xs={12}>
                                Menu
                        </Grid>
                        )}
                        <Grid item xs={12}>
                            <Paper>
                                <div className={this.props.location.pathname === "/login" ? "login-panel" : "main-panel"}>{this.props.children}</div>
                            </Paper>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default withRouter(
    connect(mapStateToProps, { checkLogin })(Layout)
);
