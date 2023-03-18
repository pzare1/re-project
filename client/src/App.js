import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
        {user && <Route path='/' exact element={<Main />} />}
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/' exact element={<Navigate replace to="/login"/>}/>
    </Routes>
  );
}

export default App;
