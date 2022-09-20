import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Loading.module.scss';

export default function Loading() {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  console.log(isLoading);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loading_img} src="./img/loading5.gif" alt="" />
      </div>
    );
  }
  return '';
}
