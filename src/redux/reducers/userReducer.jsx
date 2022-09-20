import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { history } from '../..';
import { openNotificationWithIcon } from '../../components/Notification/Notification';
import { ACCESS_TOKEN, getStoreJSON, http, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';
import { DISPLAY_LOADING, HIDE_LOADING } from './loadingReducer';

const initialState = {
  userSignup: {},
  userSignin: getStoreJSON(USER_LOGIN),
  // isAlert: false,
  // error: '',
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserSignup: (state, action) => {
      let userSignup = action.payload;
      state.userSignup = userSignup;
    },

    setUserSignin: (state, action) => {
      let userSignin = action.payload;
      state.userSignin = userSignin;
    },

    // setAlert: (state, action) => {
    //   state.isAlert = true;
    //   state.error = action.payload;
    // },
  },
});

export const { setUserSignup, setUserSignin, setAlert } = userReducer.actions;

export default userReducer.reducer;

//-------------action thunk--------------
export const signupApi = (userSignup) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signup', userSignup);

      console.log(result);

      const action = setUserSignup(result.data.content);
      dispatch(action);

      setStoreJSON(USER_LOGIN, result.data.content);
      history.push('/');
    } catch (err) {
      console.log(err);
      openNotificationWithIcon('error', 'Error', 'This email address is already being used');
    }
  };
};

export const signinApi = (userSignin) => {
  return async (dispatch) => {
    try {
      const showLoading = DISPLAY_LOADING();
      dispatch(showLoading);

      let result = await http.post('/Users/signin', userSignin);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setStoreJSON(USER_LOGIN, result.data.content);

      // console.log(result);
      const action = setUserSignin(result.data.content);
      dispatch(action);
      history.push('/register');

      const hideLoading = HIDE_LOADING();
      dispatch(hideLoading);
    } catch (err) {
      console.log(err);
      openNotificationWithIcon('error', 'Error', 'The username or password is incorrect');
    }
  };
};
