import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { history } from '../..';
import Notification, { openNotification } from '../../components/Notification/Notification';
import { ACCESS_TOKEN, getStoreJSON, http, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';

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

      // let result = await axios({
      //   url: 'https://jiranew.cybersoft.edu.vn/api/Users/signup',
      //   method: 'POST',
      //   data: userSignup,
      // });

      console.log(result);
      const action = setUserSignup(result.data.content);
      dispatch(action);

      setStoreJSON(USER_LOGIN, result.data.content);
      history.push('/');
    } catch (err) {
      // console.log(err);
      // console.log(err);
      openNotification();
      // const action = setAlert(err.response.data.message);
    }
  };
};

export const signinApi = (userSignin) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signin', userSignin);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setStoreJSON(USER_LOGIN, result.data.content);

      // console.log(result);
      const action = setUserSignin(result.data.content);
      dispatch(action);
      history.push('/');
    } catch (err) {
      console.log(err);
      alert('tai khoan mat khau k dung');
    }
  };
};
