import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom'; 
import './Layout.css';
import { AnimatePresence } from 'framer-motion'

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  
  return (
    <> 
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

      <main> 
        <AnimatePresence mode="wait">
          {currentOutlet && React.cloneElement(currentOutlet, { key: location.pathname })}
        </AnimatePresence>
      </main>
    </>
  );
}

export default Layout;
