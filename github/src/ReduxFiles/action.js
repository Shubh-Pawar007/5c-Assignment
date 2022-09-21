import axios from "axios";
import * as types from "./actionTypes"

//getting Repos Actions
export const userRequest = () => {
  return { type: types.USER_REQUEST };
};

export const userSuccess = (payload) => {
  return { type: types.USER_SUCCESS, payload };
};

export const userFailure = () => {
  return { type: types.USER_FAILURE };
};

export const userFunc = (user) => (dispatch) => {
  dispatch(userRequest());
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((r) =>{
        localStorage.setItem("USER_REPOS",JSON.stringify(r.data))
        dispatch(userSuccess(r.data))
    } )
    .catch((e) => dispatch(userFailure()));
};

//follower actions:===>

export const followerRequest = () => {
  return { type: types.FOLLOWER_REQUEST };
};

export const followerSuccess = (payload) => {
  return { type: types.FOLLOWER_SUCCESS, payload };
};

export const followerFailure = () => {
  return { type: types.FOLLOWER_FAILURE };
};

export const followerFunc = (user) => (dispatch) => {
  dispatch(followerRequest());
  axios
    .get(`https://api.github.com/users/${user}/followers`)
    .then((r) => dispatch(followerSuccess(r.data)));
};

//Get Followers Repo

export const getfollowerSuccess = (payload) => {
    return { type: types.GET_FOLLOWER_SUCCESS, payload };
  };

export const getFollowerRepo = (user) => (dispatch) => {
    dispatch(userRequest());
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((r) => dispatch(getfollowerSuccess(r.data)))
      .catch((e) => dispatch(userFailure()));
  };