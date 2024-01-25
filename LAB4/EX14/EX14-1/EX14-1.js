import React, { createContext, useContext, useState } from 'react';

// Define themes
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb"
  }
};

// Create ThemeContext
const ThemeContext = createContext();

// Create ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create useTheme hook
const useTheme = () => {
  return useContext(ThemeContext);
};

// Create Theme component
const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.background, padding: '20px', textAlign: 'center' }}>
      <button
        style={{ color: theme.foreground, background: theme.background, padding: '10px', cursor: 'pointer' }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <p style={{ color: theme.foreground, marginTop: '10px' }}>Current Theme: {theme === themes.light ? 'Light' : 'Dark'}</p>
    </div>
  );
};

// Create App component
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher App</h1>
        <Theme />
      </div>
    </ThemeProvider>
  );
};

export default App;
