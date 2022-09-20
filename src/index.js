import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/main.scss';
//setup router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import UserLoginTemplate from './templates/UserLoginTemplate/UserLoginTemplate';
import Loading from './components/Loading/Loading';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Route>

        <Route path="" element={<UserLoginTemplate />}>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
