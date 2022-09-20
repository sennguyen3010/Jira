import React from 'react';

export default function Loading() {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh' }}>
        <img style={{ width: '200px', height: '200px' }} src="./img/loading.svg" alt="" />
      </div>
    </div>
  );
}
