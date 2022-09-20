import React from 'react';
import Lordicon from '../../components/Lordicon';
import styles from './Detail.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Detail() {
  return (
    <div className={`${styles.listCard_layout}`}>
      <div className="d-flex">
        <h3 className={`${styles.member_h3}`}>Name project</h3>
        <div className={`d-flex`}>
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
      </div>

      {/* card */}
      <div className={`${styles.listCard_layout_content} d-flex`}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
