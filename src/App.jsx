import { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

const App = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login'); // Redirect to login after registration
  };

  const handleLogin = (data) => {
    setUserData(data);
    navigate('/profile'); // Redirect to profile on successful login
  };

  const handleUpdate = (data) => {
    setUserData(data); // Update local state with new user data
  };

  const handleLogout = () => {
    setUserData(null); // Clear user data
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Register onRegister={handleRegister} navigate={navigate} />
              <p>
                Already have an account?{' '}
                <Link to="/login">Login here</Link>
              </p>
            </div>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} navigate={navigate} />} />
        <Route path="/profile" element={userData ? <Profile userData={userData} onUpdate={handleUpdate} onLogout={handleLogout} /> : <Login onLogin={handleLogin} navigate={navigate} />} />
      </Routes>
    </div>
  );
};

export default App;
