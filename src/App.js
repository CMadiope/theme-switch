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
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className='App'>
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton className='light active'></ThemeButton>
          <ThemeButton className='dark'></ThemeButton>
          <ThemeButton className='blue'></ThemeButton>
          <ThemeButton className='green'></ThemeButton>
          <ThemeButton className='brown'></ThemeButton>
          <ThemeButton className='pink'></ThemeButton>
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
