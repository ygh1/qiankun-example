import './App.css';
import {Routes,Route, NavLink} from 'react-router-dom'
import Home from './pages/home'
import Teams from './pages/teams'

function App() {
  return (
    <div>
      <NavLink to="/">首页1</NavLink>
      <NavLink to="/teams">teams</NavLink>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />}></Route>
    </Routes>
    </div>
  );
}

export default App;
