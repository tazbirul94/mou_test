import { useState, useEffect } from 'react';
import SageMakerNotebook from './SageMakerNotebook';
import { getNotebooks } from '../api/APIs';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const SageMakerNotebookInstances = () => {
  const [notebooks, setNotebooks] = useState([]);
  useEffect(() => {
    fetchNotebooks();
  }, []);

  const fetchNotebooks = async () => {
    let res = await getNotebooks();
    if (res) {
      setNotebooks(res);
    } else {
      console.debug('No notebooks?', res);
    }
  };

  return (
    <ListGroup variant='flush' className='m-3 d-flex align-items-center'>
      {notebooks.map((n) => (
          <SageMakerNotebook key={n['NotebookInstanceName']} notebook={n} />
      
      ))}
    </ListGroup>
  );
};

export default SageMakerNotebookInstances;
