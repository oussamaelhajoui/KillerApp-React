import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import "../assets/css/main.css";

import { connect } from "react-redux";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <Grid container className={classes.root} spacing={16}>
                    {this.props.user.loggedIn && (
                        <Grid item xs={12}>
                            Menu
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Paper>
                            <div className={this.props.location.pathname === "/login" ? "" : "main-panel"}>{this.props.children}</div>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default withRouter(
    connect(mapStateToProps, {})(Layout)
);