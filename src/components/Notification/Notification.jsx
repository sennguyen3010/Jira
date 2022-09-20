import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

// export default function Notification() {

//   return (
//     <Button type="primary" onClick={openNotification}>
//       Open the notification box
//     </Button>
//   );
// }

export const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This email address is already being used',
    icon: (
      <SmileOutlined
        style={{
          color: '#108ee9',
        }}
      />
    ),
  });
};
