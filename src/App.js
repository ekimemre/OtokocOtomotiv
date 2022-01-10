import './App.css';
import Login from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
