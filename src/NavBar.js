import React from 'react';

function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
        <h1>The blog</h1>
        <div className="links">
          <a href="/home">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;