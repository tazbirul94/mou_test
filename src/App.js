import './App.css';
import Content from './components/CustomNav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  // const [warning, setWarning] = React.useState(false);
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}

export default App;
