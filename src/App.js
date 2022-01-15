import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';
import './App.css';

function App() {

  // Dashboard öncesi kontrol sağlanabilmesi için kullanıcının girdiği email ve password değerleri Login sayfasında alınıyor ve ProtectedRoute'a yollanıyor.
  const [form, setForm] = useState({userName:"" , password:""})
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className='App'>

      <ItemProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login form={form} setForm={setForm} isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
            <Route element={<ProtectedRoute form={form} isAuth={isAuth}/>}>
              <Route path="/dashboard" element={<Dashboard />}/>
            </Route>  
          </Routes>
        </BrowserRouter>
      </ItemProvider>
      
    </div>
  );
}

export default App;
