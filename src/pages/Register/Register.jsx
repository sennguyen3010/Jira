import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Register.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signupApi } from '../../redux/reducers/userReducer';
import Notification, { openNotification } from '../../components/Notification/Notification';
import Loading from '../../components/Loading/Loading';

export default function Register() {
  // const isAlert = useSelector((state) => state.userReducer);
  // console.log(isAlert);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Please enter your email!').email('Invalid email!'),
      password: Yup.string().required('Please enter your password!').min(3, 'Password must be at least 3 characters!'),
      name: Yup.string().required('Please enter your name!'),
      phoneNumber: Yup.string()
        .required('Please enter your phone!')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Phone number can not contain letters!'),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const action = signupApi(values);
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
            <img className={styles.img} src="./img/register.webp" alt="..." />
          </div>
        </div>
        <div className={`col-8 position-relative`}>
          <div className={styles.content}>
            <div className={styles.content_layout}>
              <h3 className={styles.title}>Sign up to Jira</h3>

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
                  <p className={styles.login_gg_content}>Đăng ký bằng Google</p>
                </div>
                <button className={styles.login_fb}>
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>

              <div className={`${styles.hr}`}></div>

              <div className="">
                <form className="row g-4" onSubmit={formik.handleSubmit}>
                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.label}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="name"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name ? <p className="text text-danger">{formik.errors.name}</p> : ''}
                  </div>
                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className={`form-label ${styles.label}`}>
                      Phone number
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="phoneNumber"
                      onChange={formik.handleChange}
                    />{' '}
                    {formik.errors.phoneNumber ? <p className="text text-danger">{formik.errors.phoneNumber}</p> : ''}
                  </div>
                  <div className="col-12">
                    <label htmlFor="exampleInputPassword1" className={`form-label ${styles.label}`}>
                      Email
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="email"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email ? <p className="text text-danger">{formik.errors.email}</p> : ''}
                  </div>
                  <div className="col-12">
                    <label htmlFor="exampleInputPassword1" className={`form-label ${styles.label}`}>
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${styles.input}`}
                      id="password"
                      onChange={formik.handleChange}
                    />{' '}
                    {formik.errors.password ? <p className="text text-danger">{formik.errors.password}</p> : ''}
                  </div>
                  <div className="col-12">
                    <div className={`${styles.register}`}>
                      <span>Already a member?</span>
                      <NavLink className={styles.sign_up} to="/login">
                        Sign in
                      </NavLink>
                      {/* <Notification /> */}
                    </div>
                  </div>

                  <div className="col-6">
                    <button type="submit" className={`${styles.button_submit}`}>
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
