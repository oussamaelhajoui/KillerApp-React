import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Button from '@material-ui/core/Button';


import Icon from '@material-ui/core/Icon';
import Image from 'material-ui-image'

import '../../assets/css/login.css';
import Foto from '../../assets/img/posnlicon.svg';

import { connect } from "react-redux";
import { logIn } from '../../actions/loginAction';

class Login extends Component {
    state = {
        password: '',
        username: '',
        showPassword: false,
    }

    componentWillMount() {
        if (this.props.user.loggedIn) {
            this.props[0].history.push("/");
        }
    }

    componentDidUpdate() {
        if (this.props.user.loggedIn) {
            this.props[0].history.push("/");
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleLogin = event => {
        this.props.logIn({ username: this.state.username, password: this.state.password })
    };

    handleLoginOnEnter = event => {
        if (event.keyCode === 13)
            this.props.logIn({ username: this.state.username, password: this.state.password })
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        return (
            <div>
                <Grid container justify="center" alignItems="center" alignContent="center">
                    <Paper className="loginpaper" elevation={23}>
                        <Grid item xs={12} md={6} className="GridWPadding20" >

                            <Image
                                src={Foto}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className="GridWPadding20">
                            <form onSubmit={this.handleLogin}>
                                <Grid container justify="center" alignItems="center" alignContent="space-between">
                                    <Grid item xs={12}>
                                        <FormControl fullWidth={true} className="FCWM20">
                                            <InputLabel htmlFor="adornment-username">Username</InputLabel>
                                            <Input
                                                id="adornment-username"
                                                type='text'
                                                value={this.state.username}
                                                fullWidth={true}
                                                onChange={this.handleChange('username')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Icon>
                                                            account_circle
                                                    </Icon>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth={true} className="FCWM20">
                                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                            <Input
                                                id="adornment-password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                onKeyUp={this.handleLoginOnEnter}
                                                fullWidth={true}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password visibility"
                                                            onClick={this.handleClickShowPassword}
                                                            onMouseDown={this.handleMouseDownPassword}
                                                        >
                                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Icon>
                                                            lock
                                                    </Icon>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="raised" color="primary" fullWidth={true} onClick={this.handleLogin} >
                                            Log in
                                        </Button>
                                    </Grid>
                                </Grid>
                                {this.props.user.errorMsg !== "" ? <FormHelperText id="name-error-text" className="errorText">{this.props.user.errorMsg}</FormHelperText> : ""}
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, { logIn })(Login);