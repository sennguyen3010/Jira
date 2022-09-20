import React from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

export default function UserLoginTemplate() {
  return (
    <>
      <Loading />
      <Outlet />
    </>
  );
}
