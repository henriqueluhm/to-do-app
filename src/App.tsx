import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header/Header'
import AddToDo from './components/AddToDo/AddToDo';
import YourToDos from './components/YourToDos/YourToDos';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <div className="header">
          <Header toggleTheme={toggleTheme} />
        </div>
        <div className="add">
          <AddToDo toggleTheme={toggleTheme} />
        </div>
        <div className="your">
          <YourToDos toggleTheme={toggleTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
