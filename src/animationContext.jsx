import React, { useState, createContext } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    const [exitDirection, setExitDirection] = useState('middle');
    const [enterDirection, setEnterDirection] = useState('middle')

    return (
        <AnimationContext.Provider value={{ exitDirection, setExitDirection, enterDirection, setEnterDirection}}>
            {children}
        </AnimationContext.Provider>
        
    )
}
