import './App.css';
import Content from './components/CustomNav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [warning, setWarning] = React.useState(false);
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
