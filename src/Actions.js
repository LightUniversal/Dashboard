// Action types

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT = "LOGOUT";

// Action creators
export const login = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});
export const register = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
});

export const logout = () => ({
    type: LOGOUT
})