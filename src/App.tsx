import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Newrender from './Newrender';
import Navbar from './Navbar';
import Form from './Form';
import Welcome from './Welcome';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/welcome/:formdata" element={<Newrender/>}/>
    </Routes>
    </Router>
  );
}

export default App;
