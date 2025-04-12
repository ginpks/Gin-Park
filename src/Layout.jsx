import React from 'react';
import { Outlet } from 'react-router-dom'; 
import './Layout.css';

function Layout() {
  return (
    <> 
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

      <main> 
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
