import * as types from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  repos: [],
  followers: [],
  followerRepo:[]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REQUEST:
      return { ...state, loading: true, error: false };
    case types.USER_SUCCESS:
      return { ...state, repos: action.payload, loading: false, error: false };
    case types.USER_FAILURE:
      return { ...state, loading: false, error: true };

    case types.FOLLOWER_REQUEST:
      return { ...state };
    case types.FOLLOWER_SUCCESS:
      return { ...state, followers: action.payload };
    case types.FOLLOWER_FAILURE:
      return { ...state, loading: false, error: true };

      case types.GET_FOLLOWER_SUCCESS:
        return {...state,loading:false,followerRepo:action.payload,error:false}

    default:
      return state;
  }
};
