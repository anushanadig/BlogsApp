import React from "react";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndusers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //   const users = _map(getState.users, "userId");
  //   users.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const payload = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: payload.data });
  };
};

export const fetchUser = id => {
  return async (dispatch, getState) => {
    const payload = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USERS", payload: payload.data });
  };
};

//memoized action creators
// export const fetchUser = id => dispatch => _fetchUserMemoize(id, dispatch);

// const _fetchUserMemoize = _.memoize(async (id, dispatch) => {
//   const payload = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USERS", payload: payload.data });
// });
