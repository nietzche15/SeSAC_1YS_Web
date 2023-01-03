import logo from './logo.svg';
import './App.css';
import Swal from "sweetalert2";
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';

function App() {
  return (
    <div className="App">
      <BtnToNaver />   
      <ImgComponent />       
    </div>
  );
}

export default App;
