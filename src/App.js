import {GlobalStyles} from './Components/styles/Global'
import {Header} from './Components/styles/Header.styled'
import {Footer} from './Components/styles/Footer.styled'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header>Game of Thrones Quotes</Header>
      <Footer>
        <p>
          Made by <a href='https://github.com/CMadiope'>Confidence</a>
        </p>
      </Footer>
    </div>
  );
}

export default App;
