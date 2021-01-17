import qs from "querystring";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import setCurrentUser from "./setCurrentUser";
import {GET_ERRORS} from '../type/authTypes'

// Register User
export const registerEmployee = (userData, history) => dispatch => {
    console.log(userData)
    axios
        .post("/api/employeeAuth/signup_api", qs.stringify(userData))
        .then(res => {
            if(res.data.success){
                history.push("/verifyemail", userData)
            }
            else{
                dispatch({
                    type: GET_ERRORS,
                    payload: res.data.message
                })
            }

        }) // re-direct to email verification on successful register
        .catch(err => {
            console.log(err)

        });
};


// Login - get user token
export const loginEmployee = (userData, history) => dispatch => {
    axios.post("/api/employeeAuth//signin_api", userData)
        .then(res => {
            if(res.data.success){
                // Save to localStorage// Set token to localStorage
                const { token } = res.data;
                // Decode token to get user data
                const decoded = jwt_decode(token);
                localStorage.setItem("jwtToken", token);
                // Set token to Auth header
                setAuthToken(token);
                // Set current user
                history.push('/')
                dispatch(setCurrentUser(decoded));
            }else{
                dispatch({
                    type: GET_ERRORS,
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
                console.log(err)
            }
        );
};