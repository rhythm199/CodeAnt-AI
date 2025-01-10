import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// Create Theme Context
const ThemeContext = createContext();

// Custom hook for easier access
export const useTheme = () => useContext(ThemeContext);

// Theme Provider
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children are provided
};