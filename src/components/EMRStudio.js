import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { default as Button } from './CustomButton';
import { redirectTo } from '../utils/utils';

const EMRStudio = ({ studio }) => {
  const studioId = studio['StudioId'];
  const studioName = studio['Name'];
  const studioAuthMode = studio['AuthMode'];
  const studioUrl = studio['Url'];

  const onRedirectClick = () => {
    redirectTo(studioUrl);
  };
  return (
    <>
      <ListGroup.Item className='m-2 d-flex align-items-center'>
        <div className='vw-color flex-fill'>
          <div className='mb-2 fw-bold'>
            {studioName} - {studioId}
          </div>
          <div>Auth Mode: {studioAuthMode}</div>
        </div>
        <div>
          <Button onClick={onRedirectClick} text='Redirect me' />
        </div>
      </ListGroup.Item>
    </>
  );
};

export default EMRStudio;
