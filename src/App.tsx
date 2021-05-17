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
        <header className="header">
          <Header toggleTheme={toggleTheme} />
        </header>
        <section className="add">
          <AddToDo toggleTheme={toggleTheme} />
        </section>
        <section className="your">
          <YourToDos toggleTheme={toggleTheme} />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
