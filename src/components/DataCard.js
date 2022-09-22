import { useState, useEffect } from 'react';

const DataCard = (props) => {

  const [show, setShow] = useState(true)
  // const handleClose = () => setShow(false);

  return (
    <div>
      {
      show ? (<div class="card">
      <div class="card-body">
        <h5 class="card-title">Changing instance type for {props.instanceName}</h5>
     
        <p class="card-text">You are going to change your notebook instance type to:{' '}
            {props.instanceType}</p>
            <i>{props.description}</i>
            <p className='my-2'>
            This action may cause disruptions of service. Are you sure?
          </p>
          {/* <button type="button" class="btn btn-dark btn-sm" onClick={handleClose}>Close</button> */}
          <button type="button" class="btn btn-dark btn-sm">Close</button>
         <span style={{padding:'0.2em'}}></span>
          <button type="button" class="btn btn-dark btn-sm">Save</button>
      </div>
    </div>) 
    : 
    null}

    </div>

   
  );
};

export default DataCard;
