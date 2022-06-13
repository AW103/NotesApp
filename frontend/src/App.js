import React from 'react';
// import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import Home from './home/Home';
import useLogin from './login/useLogin';
import Register from "./register/Register";
import useRegister from './register/useRegister';


const App = () => {
  const [login, authorized, userId] = useLogin("");
  const [register, isRegistered] = useRegister("");


  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={!authorized ? <Navigate to="/login"/> : <Home authenticated={authorized} userId={userId}/>} />
      <Route path="/login" element={<Login login={login} authorized={authorized}/>} />
      <Route path="/register" element={<Register register={register} isRegistered={isRegistered}/>}/>
      </Routes>
    </div>
  );
}

export default App;
