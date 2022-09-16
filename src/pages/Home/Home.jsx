import React from 'react';
import Lordicon from '../../components/Lordicon';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="">
        <Sidebar />

        <div className={`${styles.board}`}>
          <div className={styles.board_content}>

          <Header />
          {/* listCard */}
          <div className={`${styles.listCard_layout}`}>
            <h3 className={`${styles.member_h3} col-6`}>Name project</h3>

            {/* card */}
            <div className={`${styles.listCard_layout_content} d-flex`}>
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
  );
}
