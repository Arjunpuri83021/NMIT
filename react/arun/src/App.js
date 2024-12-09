

import './App.css';
import Home from './components/home';
import{BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
