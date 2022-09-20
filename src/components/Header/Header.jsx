import React from 'react';
import Modal from '../Modal/Modal';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={`${styles.header_layout}`}>
      <div className={`${styles.header_hr}`}>
        <div className="container-fluid">
          <div className="header">
            <nav className="navbar">
              <div className="container-fluid pe-0">
                <form className={`row ${styles.header}`} role="search">
                  <div className={`col-3 ${styles.header_search}`}>
                    <input
                      className={`form-control me-2 ${styles.header_input}`}
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <i className={`fas fa-search ${styles.header_input_icon}`}></i>
                  </div>

                  <div className="col-3 d-flex justify-content-end">
                    {/* <button className={`btn btn-primary ${styles.btn_addtask}`}>
                      <i className={`far fa-plus ${styles.btn_addtask_icon}`}></i>
                      <span>Add new task</span>
                    </button> */}

                    <button className={`btn btn-outline-primary ${styles.header_calendar}`}>
                      <i className={`fas fa-calendar-plus ${styles.header_calendar_i}`}></i>
                    </button>

                    <button className={`btn btn-outline-primary ${styles.header_calendar}`}>
                      <i className={`fas fa-bell ${styles.header_calendar_i}`}></i>
                    </button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      {/* <div className="container-fluid">
              <div className={`${styles.content}`}>
                <div className="">
                  <div className={styles.content_link}>
                    <ul className={styles.content_link_ul}>
                      <li className={styles.content_link_li}>
                        <a className={styles.content_link_a} href="#">
                          Projects<span className={styles.content_link_span}>/</span>
                        </a>
                      </li>

                      <li className={styles.content_link_li}>
                        <a className={styles.content_link_a} href="#">
                          Projects<span className={styles.content_link_span}>/</span>
                        </a>
                      </li>

                      <li className={styles.content_link_li}>
                        <a className={`${styles.content_link_a} ${styles.project_name}`} href="#">
                          Projects name
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className={`row justify-content-between align-items-center member`}>
                    <h3 className={`${styles.member_h3} col-6`}>Name project</h3>
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
}
