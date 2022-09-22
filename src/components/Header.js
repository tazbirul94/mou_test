import { PropTypes } from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import VWLogo from '../images/VWLogo.png';

export const Header = ({ title }) => {
  return (
    <div class='jumbotron'>
     <header className='header'>    
       <h1 className='display-4'>{title}</h1>
      <Row className='d-inline-flex justify-content-md-around'>
        <Col className='align-self-center'>
          <hr className='line' />
        </Col>
        <Col className='align-self-center' xs={1}>
          <Image src={VWLogo} fluid roundedCircle></Image>
        </Col>
        <Col className='align-self-center'>
          <hr className='line' />
        </Col>
      </Row>
      
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: 'Notebook Environment',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
