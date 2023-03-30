import React from 'react';
import '../links.css'

const Link = ({ url, username, password }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className='links'>
      <a href="#" onClick={handleClick}>{url}</a>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Link;