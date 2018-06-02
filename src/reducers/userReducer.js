import { LOG_IN, LOG_OUT, CHECK_LOGIN, GET_USER, ERROR_LOGIN, CHANGE_LOADING } from "../actions/types";

const initialState = {
    loggedIn: false, // set to false
    username: "",
    password: "",
    userRole: null, //set to null
    token: null,
    errorMsg: "",
    loading: false,
    user: {
        id: null,
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        role: null
    }

};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: action.payload.loggedIn,
                token: action.payload.dbResponse.token,
                userRole: action.payload.dbResponse.role,
                errorMsg: ""
            };
        // break;
        case LOG_OUT:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: action.payload.loggedIn,
                token: null,
                userRole: null,
                errorMsg: ""

            };
        // break;
        case CHECK_LOGIN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: action.payload.loggedIn,
                token: action.payload.dbResponse.token,
                userRole: action.payload.dbResponse.role,
            };
        // break;
        case GET_USER:
            return {
                ...state,
                user: { ...action.payload.newUser }
            };
        // break;
        case ERROR_LOGIN:
            return {
                ...state,
                errorMsg: action.payload.errorMsg
            }
        // break;
        case CHANGE_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        // break;
        default:
            return { ...state };
        // break;
    }
};
