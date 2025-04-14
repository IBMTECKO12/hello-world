import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using JSONPlaceholder API for demonstration
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Custom render function for list items
  const renderUserItem = (user) => (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="app-container">
      <h1>User List</h1>
      {data.length > 0 ? (
        <ListComponent 
          items={data} 
          renderItem={renderUserItem} 
          listClassName="user-list"
          itemClassName="user-list-item"
        />
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;