import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'

function App(props) {
  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
  );
}

export default App;
