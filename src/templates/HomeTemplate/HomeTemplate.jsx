import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../HomeTemplate/HomeTemplate.module.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function HomeTemplate() {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        <Sidebar />

        <div className={`${styles.board}`}>
          <div className={styles.board_content}>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
