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
import { useState, useEffect } from "react";

function App() {
  //theme state
  const [selectedTheme, setSelectedTheme] = useState(light);
  //react hook to get the theme selected by user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('current-theme'))
    if (currentTheme) {
      setSelectedTheme(currentTheme)
    }
  }, [])

  //function to handle user them selection on click and save it to local storage
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('current-theme', JSON.stringify(theme))
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
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}
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
