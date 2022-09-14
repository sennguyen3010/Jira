import React from 'react';
import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={`${styles.list_wrap}`}>
      <div className={`${styles.listCard}`}>
        <h5 className={`${styles.listCard_title}`}>To do</h5>
        <div className={styles.test}>
          <div className={`${styles.listCard_item} card`}>
            <img className={`${styles.listCard_item_img}`} src="./img/card-bg.jpg" alt="Title" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>

          <div className={`${styles.listCard_item} card`}>
            <img className={`${styles.listCard_item_img}`} src="./img/card-bg.jpg" alt="Title" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
        <button className={`btn btn-outline-secondary ${styles.btn_addtask} ${styles.listCard_btn}`}>
          <i className={`fas fa-plus-circle ${styles.btn_addtask_icon}`}></i>
          <span className="ms-2">Add new</span>
        </button>
      </div>
    </div>
  );
}
