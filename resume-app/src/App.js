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
          廢棄囉~新站建置中
        </p>
        <p>專案可先參考以下</p>
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
