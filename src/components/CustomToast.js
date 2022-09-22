import React from 'react';
import { Toast } from 'react-bootstrap';

const CustomToast = ({ title, message, show, onClose }) => {
  return (
    <Toast show={show} onClose={onClose} delay={2000}>
      <Toast.Header>
        <strong className='me-auto'>{title ?? 'Custom toast'}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default CustomToast;
