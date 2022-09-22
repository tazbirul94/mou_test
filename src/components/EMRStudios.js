import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import EMRStudio from './EMRStudio';
import { getStudios } from '../api/APIs';

const EMRStudios = () => {
  const [studios, setStudios] = useState([]);
  useEffect(() => {
    fetchStudios();
  }, []);

  const fetchStudios = async () => {
    let res = await getStudios();
    if (res) {
      setStudios(res);
    } else {
      console.debug('No studios?', res);
    }
  };
  return (
    <ListGroup variant='flush' className='m-3 d-flex align-items-center'>
        {studios.map((s) => (
          <EMRStudio key={s['StudioId']} studio={s}></EMRStudio>
        ))}
    </ListGroup>
  );
};

export default EMRStudios;
