import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const SagemakerModal = ({ show, handleClose, niName, newType }) => {
  return (
    <Modal show={show.toString()} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Changing instance type for {niName}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>You are going to change your notebook instance type to: {newType}</p>
        <p>This action may cause interruptions of service. Are you sure?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className='mx-2' variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button
          className='mx-2'
          variant='primary'
          onClick={() => saveNewInstanceType(newType)}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const saveNewInstanceType = (instanceType) => {
  console.log(instanceType);
};

SagemakerModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  niName: PropTypes.string.isRequired,
  newType: PropTypes.string.isRequired,
};

export default SagemakerModal;
