import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/sass/main.scss';
import reportWebVitals from './reportWebVitals';
//setup router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { UserLoginTemplate } from './templates/HomeTemplate/HomeTemplate';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
