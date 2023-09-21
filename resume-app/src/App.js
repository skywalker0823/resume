import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        <p>
          主要內容施工中:/
        </p>
        <p>其他專案可先參考以下</p>
        <a
          className="App-link"
          href="https://motivetag.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Motivetag
        </a>
        <p>or</p>
        <a
          className="App-link"
          href="https://github.com/skywalker0823?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >My GitHub</a>
      </header>
    </div>
  );
}

export default App;
