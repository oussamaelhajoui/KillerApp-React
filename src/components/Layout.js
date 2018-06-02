import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import "../assets/css/main.css";

import { connect } from "react-redux";

class Layout extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default withRouter(
    connect(mapStateToProps, {})(Layout)
);