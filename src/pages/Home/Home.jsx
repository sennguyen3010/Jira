import React from 'react';
import Lordicon from '../../components/Lordicon';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="">
        <div className={`${styles.sidebar}`}>
          <div className={styles.brand_layout}>
            <a href="#" className={styles.logo}>
              <img className={styles.logo_img} src="./img/logo.png" alt="" />
              <span className={styles.brand}>Jira</span>
            </a>
            <div className={styles.close}>
              <Lordicon
                src="https://cdn.lordicon.com/wgwcqouc.json"
                trigger="morph"
                colors={{ primary: '#f53924' }}
              ></Lordicon>
            </div>
          </div>

          <div className={`${styles.menu}`}>
            <ul className={styles.menu_ul}>
              <li className={styles.menu_li}>
                <a className={styles.menu_a} href="#">
                  <i className={`fa fa-home-lg ${styles.menu_i}`}></i>
                  <span className={styles.menu_span}>Dashboard</span>
                </a>
              </li>

              <li className={styles.menu_li}>
                <a className={styles.menu_a} href="#">
                  <i className="fa fa-home-lg"></i>
                  <span className={styles.menu_span}>My tasks</span>
                </a>
              </li>

              <li className={styles.menu_li}>
                <a className={styles.menu_a} href="#">
                  <i className="fa fa-home-lg"></i>
                  <span className={styles.menu_span}>Calendar</span>
                </a>
              </li>

              <li className={styles.menu_li}>
                <a className={styles.menu_a} href="#">
                  <i className="fa fa-home-lg"></i>
                  <span className={styles.menu_span}>Document</span>
                </a>
              </li>

              <li className={styles.menu_li}>
                <a className={styles.menu_a} href="#">
                  <i className="fa fa-home-lg"></i>
                  <span className={styles.menu_span}>Teams</span>
                </a>
              </li>
            </ul>
          </div>

          {/* project */}
          <div className={`accordion ${styles.project}`} id="accordionPanelsStayOpenExample">
            <div className={`accordion-item ${styles.project_item}`}>
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className={`accordion-button ${styles.project_btn}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Project
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className={`accordion-body  mt-2 ${styles.project_body} ${styles.menu}`}>
                  <ul className={styles.menu_ul}>
                    <li className={`${styles.menu_li} p-0 mt-2`}>
                      <a className={styles.menu_a} href="#">
                        <Lordicon
                          src="https://cdn.lordicon.com/shiwicyv.json"
                          trigger="morph"
                          style={{ width: '50px', height: '50px' }}
                          colors="primary:#4030e8,secondary:#ffc738,tertiary:#9cf4df"
                        ></Lordicon>
                        <span className={`${styles.menu_span}`}>Project name</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.board}`}>
          <div>
            {/* header */}
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

                          <div className={`col-3 d-flex`}>
                            <div className={`${styles.member_group}`}>
                              <i className={`fas fa-user-circle ${styles.member_icon}`} />
                              <i className={`fas fa-user-circle ${styles.member_icon}`} />
                              <i className={`fas fa-user-circle ${styles.member_icon}`} />
                            </div>

                            <button className={`btn btn-outline-secondary ${styles.member_btn}`}>
                              <i className={`fas fa-plus-circle ${styles.btn_addtask_icon}`}></i>
                              <span className="ms-2">Add member</span>
                            </button>
                          </div>

                          <div className="col-3 d-flex justify-content-end">
                            <button className={`btn btn-primary ${styles.btn_addtask}`}>
                              <i className={`far fa-plus ${styles.btn_addtask_icon}`}></i>
                              <span>Add new task</span>
                            </button>

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

            {/* listCard */}
            <div className={`${styles.listCard_layout}`}>
              <h3 className={`${styles.member_h3} col-6`}>Name project</h3>

              <div className="">
                {/* card */}
                <div className="d-flex">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
