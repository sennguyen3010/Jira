import React from 'react';
import Lordicon from '../../components/Lordicon';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect } from 'react';
import { signinApi } from '../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';

export default function Home() {
  const { userSignin } = useSelector((state) => state.userReducer);
  console.log(userSignin);

  const renderProject = () => {
    return (
      <div className="col-3">
        <div className={`${styles.listCard_item} card`}>
          <img className={`${styles.listCard_item_img}`} src="./img/card-bg.jpg" alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`${styles.listCard_layout}`}>
      {/* <h3 className={`${styles.member_h3} col-6`}>Name project</h3> */}

      {/* card */}
      {/* <div className={`${styles.listCard_layout_content} d-flex`}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <div className="container-fluid">
        <div className="row mt-4">
          {renderProject()} {renderProject()} {renderProject()} {renderProject()}
        </div>
      </div>
    </div>
  );
}
