import FormList from 'antd/lib/form/FormList';
import { Formik, useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { signinApi } from '../../redux/reducers/userReducer';
import styles from './Login.module.scss';

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Please enter your email!').email('Invalid email!'),
      password: Yup.string().required('Please enter your password!').min(3, 'Password must be at least 3 characters!'),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const action = signinApi(values);
      dispatch(action);
    },
  });
  return (
    <div className="container-fluid">
      <div className={`${styles.layout} row`}>
        <div className={`${styles.sider} col-4 gx-0`}>
          <NavLink to="/" className={styles.logo}>
            <img className={styles.logo_img} src="./img/logo.png" alt="" />
            <span className={styles.brand}>Jira</span>
          </NavLink>
          <p className={styles.slogan}>
            Work better, Plan better and <br /> Build better
          </p>
          <div>
            <img className={styles.img} src="./img/login.webp" alt="..." />
          </div>
        </div>
        <div className={`col-8 position-relative`}>
          <div className={styles.content}>
            <div className={styles.content_layout}>
              <h3 className={styles.title}>Sign in to Jira</h3>

              <div className="d-flex">
                <div className={`${styles.login_gg}`}>
                  <div className={styles.bg_icon}>
                    <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className={styles.login_gg_content}>????ng nh???p b???ng Google</p>
                </div>
                <button className={styles.login_fb}>
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>

              <div className={`${styles.hr}`}></div>

              <div className="">
                <form className="" onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.label}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${styles.input}`}
                      id="email"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email ? <p className="text text-danger">{formik.errors.email}</p> : ''}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className={`form-label ${styles.label}`}>
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${styles.input}`}
                      id="password"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password ? <p className="text text-danger">{formik.errors.password}</p> : ''}
                  </div>

                  <button className={`${styles.button_submit}`}>Sign In</button>
                </form>
              </div>
            </div>

            <div className={styles.register}>
              <span>Not a member?</span>
              <NavLink className={styles.sign_up} to="/register">
                Sign up now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
