import { Routes, Route } from 'react-router-dom';

import Login from './routes/Login';
import Menu from './routes/Menu';
import Register from './routes/Register';
import Recover from './routes/Recover';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Recover' element={<Recover />} />
      </Routes>
    </div>
  );
}
