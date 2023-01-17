// import logo from './logo.svg';
import './App.css';
import Ex1 from './components/Ex1';
import FancyBorder from './components/FancyBorder';
import TestCss from './components/TestCss';

function App() {
  return (
    <div className="App">
      <FancyBorder color="paleturquoise">
        <TestCss />
      </FancyBorder>
    </div>
  );
}

export default App;
