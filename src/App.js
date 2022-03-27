import { Routes, Route } from 'react-router-dom';

import Login from './routes/Login';
import Menu from './routes/Menu';
import SignUp from './routes/SignUp';
import Recover from './routes/Recover';
import Profile from './routes/Profile';
import ChangePassword from './routes/ChangePassword';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Recover' element={<Recover />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/ChangePassword' element={<ChangePassword />} />
      </Routes>
    </div>
  );
}
