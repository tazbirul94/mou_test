import { Button } from 'react-bootstrap';

const CustomButton = ({ text, onClick }) => {
  return (
    <Button className='vw-button' onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
