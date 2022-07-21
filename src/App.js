import { GlobalStyles } from "./Components/styles/Global";
import { Header } from "./Components/styles/Header.styled";
import { Footer } from "./Components/styles/Footer.styled";
import Quotes from "./Components/Quotes";
import {
  ThemeContainer,
  ThemeButton,
} from "./Components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./Components/styles/Theme.styled";
import { useState } from "react";

function App() {
  //theme state
  const [selectedTheme, setSelectedTheme] = useState(light);

  //function to handle user them selection on click and save it to local storage
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className='App'>
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
        </ThemeContainer>

        <Quotes />

        <Footer>
          <p>
            Made by <a href='https://github.com/CMadiope'>Confidence</a>
          </p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
