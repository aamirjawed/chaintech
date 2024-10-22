/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Profile.css'

const Profile = ({ userData, onUpdate, onLogout }) => {
  const [name, setName] = useState(userData.name);
  const [email] = useState(userData.email); // Read-only
  const [address, setAddress] = useState(userData.address);
  const [password, setPassword] = useState(''); // New password can be entered

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Create a new object with the updated data
    const updatedData = {
      name,
      email,
      address,
      password: password || userData.password, // Use existing password if not updating
    };
    
    localStorage.setItem(email, JSON.stringify(updatedData));
    onUpdate(updatedData); // Notify parent about the update
  };

  return (
    <div className='login'>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            readOnly
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password (leave blank to keep current):</label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
