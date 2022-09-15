import React from 'react';
import styles from './Sidebar.module.scss';
import Lordicon from '../../components/Lordicon';

export default function Sidebar() {
  return (
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
  );
}
