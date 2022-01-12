import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';
import './App.css';

function App() {

  const [form, setForm] = useState({userName:"" , password:""})

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login form={form} setForm={setForm}/>}/>
          <Route element={<ProtectedRoute form={form}/>}>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
