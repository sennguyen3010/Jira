import axios from 'axios';

export const configs = {
  setStore: (name, values) => {
    localStorage.setItem(name, values);
  },
  getStore: (name) => {
    return localStorage.getItem(name);
  },
  setStoreJSON: (name, values) => {
    values = JSON.stringify(values);
    localStorage.setItem(name, values);
  },
  getStoreJSON: (name) => {
    if (localStorage.getItem(name)) {
      let content = JSON.parse(localStorage.getItem(name));
      return content;
    }
    return null;
  },
  setCookie: (value, days, name) => {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  },
  getCookie: (name) => {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  clearCookie: (name) => {
    setCookie('', -1, name);
  },
  clearLocalStorage: (name) => {
    localStorage.removeItem(name);
  },
  ACCESS_TOKEN: 'accessToken',
  USER_LOGIN: 'userLogin',
};

export const {
  setStore,
  getStore,
  setStoreJSON,
  getStoreJSON,
  setCookie,
  getCookie,
  clearCookie,
  clearLocalStorage,
  ACCESS_TOKEN,
  USER_LOGIN,
} = configs;

const TOKEN_CYBERSOFT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOCIsIkhldEhhblN0cmluZyI6IjI1LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzI4MzIwMDAwMCIsIm5iZiI6MTY0Nzk2ODQwMCwiZXhwIjoxNjc3NDMwODAwfQ.wEdmkKpVZbDB4s4L_cmLwJ1O8le8Cc-VMgLZCI-HvLA';

export const http = axios.create({
  //https://jiranew.cybersoft.edu.vn/api/Users/signup
  baseURL: 'https://jiranew.cybersoft.edu.vn/api',
  timeout: 6000,
});

http.interceptors.request.use(
  (configs) => {
    configs.headers = {
      ...configs.headers,
      // ['Authorization']: `Bearer`
      ['TokenCybersoft']: TOKEN_CYBERSOFT,
    };
    return configs;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    // console.log(err.response.data.message);
    return Promise.reject(err);
  }
);
