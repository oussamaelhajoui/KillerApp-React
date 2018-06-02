import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    }
};

export const PrivateRoute = ({ component: Component, ...rest, user }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user.loggedIn === true ?
                    <Component {...props} userRdx={user} />
                    : <Redirect to="/login" />
            }
        />
    )
};

export const capitalizeFirstLetter = (string) => {
    return string !== null ?
        string.charAt(0).toUpperCase() + string.slice(1) :
        null;
}



export const sqlToJsDate = (sqlDate) => {
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    var sqlDateArr1 = sqlDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    var sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    var sDay = sqlDateArr2[0];
    var sqlDateArr3 = sqlDateArr2[1].split(":");
    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    var sHour = sqlDateArr3[0];
    var sMinute = sqlDateArr3[1];
    var sqlDateArr4 = sqlDateArr3[2].split(".");
    //format of sqlDateArr4[] = ['ss','ms']
    var sSecond = sqlDateArr4[0];
    var sMillisecond = sqlDateArr4[1];

    return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
}
