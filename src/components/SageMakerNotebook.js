import { MdPending, MdCancel, MdCheckCircle } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Dropdown, ListGroup, Modal, ToastContainer } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useState } from 'react';
import {
  updateNotebookInstance,
  startNotebookInstance,
  getRedirectUrl,
} from '../api/APIs';
import CustomToast from './CustomToast';
import { default as Button } from './CustomButton';
import { redirectTo } from '../utils/utils';

const instanceTypes = {
  'ml.t2.medium': {
    description:
      'Amazon EC2 T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline. 2 vCPUs, 4GiB memory, Low to Moderate network performance.',
  },
  'ml.t2.large': {
    description:
      'Amazon EC2 T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline. 2 vCPUs, 8GiB memory, Low to Moderate network performance.',
  },
  'ml.t2.xlarge': {
    description:
      'Amazon EC2 T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline. 4 vCPUs, 16GiB memory, Moderate network performance.',
  },
};

const SageMakerNotebook = ({ notebook }) => {
  const size = 30;
  const notebookInstanceName = notebook['NotebookInstanceName'];
  // const notebookInstanceStatus = notebook['NotebookInstanceStatus'];
  const notebookInstanceType = notebook['InstanceType'];
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [notebookInstanceStatus, setNotebookInstanceStatus] = useState(
    notebook['NotebookInstanceStatus'],
  );
  const [newInstanceType, setNewInstanceType] = useState(notebookInstanceType);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (type) => {
    setNewInstanceType(type);
    setShowModal(true);
  };

  const saveNewInstanceType = () => {
    updateNotebookInstance(notebookInstanceName, newInstanceType).then(
      (res) => {
        if (res === 'OK') {
          handleModalClose();
          setShowToast(true);
        } else {
          console.error('Error while updating instance type');
        }
      },
    );
  };

  const startInstance = () => {
    startNotebookInstance(notebookInstanceName).then((res) => {
      if (res === 'OK') {
        console.log('started instance');
        // TODO: automatically update status
      } else {
        console.error('Error while starting instance');
      }
    });
  };

  const getInstanceLink = () => {
    getRedirectUrl(notebookInstanceName).then((url) => {
      if (url) {
        redirectTo(url);
      } else {
        // TODO: log to end user
        console.error('No Url to redirect to!');
      }
    });
  };

  return (
    <>
      <ListGroup.Item className='m-3 d-flex align-items-center'>
        <IconContext.Provider value={{ className: 'shared-class', size: size }}>
          <div className='vw-color'>
            <div className='mb-2 fw-bold'>{notebookInstanceName}</div>
            <Dropdown onSelect={handleModalShow}>
              Instance Type:
              <Dropdown.Toggle
                value={notebookInstanceType}
                variant='light'
                className='mx-2'
                id='instance-type-dropdown'
              >
                {notebookInstanceType}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.keys(instanceTypes).map((key) => (
                  <DropdownItem key={key} eventKey={key}>
                    {key}
                  </DropdownItem>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </IconContext.Provider>
        <div>
            <span className='mx-2'>
              {getIconFromStatus(notebookInstanceStatus)}
            </span>
            {notebookInstanceStatus === 'Stopped' ? (
              <Button onClick={startInstance} text='Start instance' />
            ) : notebookInstanceStatus === 'InService' ? (
              <Button onClick={getInstanceLink} text='Redirect me!' />
            ) : (
              <></>
            )}
          </div>

      </ListGroup.Item>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Changing instance type for {notebookInstanceName}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            You are going to change your notebook instance type to:{' '}
            {newInstanceType}
          </p>
          <i>{instanceTypes[newInstanceType].description}</i>
          <p className='my-2'>
            This action may cause disruptions of service. Are you sure?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className='mx-2'
            variant='secondary'
            onClick={handleModalClose}
          >
            Close
          </Button>
          <Button
            className='mx-2'
            variant='primary'
            onClick={saveNewInstanceType}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer className='p-3' position='bottom-center'>
        <CustomToast
          show={showToast}
          message='Updated instance type'
          onClose={() => setShowToast(false)}
        />
      </ToastContainer>
    </>
  );
};

const getIconFromStatus = (status) => {
  switch (status) {
    case 'InService':
      return <MdCheckCircle style={{ color: 'green' }} />;
    case 'Stopped':
    case 'Failed':
      return <MdCancel style={{ color: '#a11303' }} />;
    default:
      return <MdPending style={{ color: '#e3ba05' }} />;
  }
};
export default SageMakerNotebook;
