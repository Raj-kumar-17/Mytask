import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Newrender from './Newrender';
import Form from './Form';
import './App.css';

function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/welcome/:formdata" element={<Newrender/>}/>
    </Routes>
 
    </Router>
  );
}

export default App;
