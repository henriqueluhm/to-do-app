import { ThemeProvider } from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import ToDoApp from "./container/ToDoApp";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ToDoApp toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
