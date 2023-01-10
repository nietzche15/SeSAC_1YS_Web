import logo from './logo.svg';
import './App.css';
import TextValid from './components/TextValid';
import BestSeller from './components/BestSeller';

function App() {
  // return <MyComponent1 name="정새싹">REACT</MyComponent1>;
  // return <MyComponent2 name="정새싹">React</MyComponent2>;
  // return <Foods fruit="Watermelon" />;
  // return (
  //   <TextValid
  //     text="App 컴포넌트에서 넘겨준 text props입니다"
  //     valid="콘솔 띄우기 성공!"
  //   />
  // );
  return (
    <BestSeller
      title="창백한 푸른 점"
      cover="https://image.aladin.co.kr/product/31/3/cover500/8983719206_2.jpg"
      author="칼 세이건"
      price="33,000원"
      category="우주과학"
    />
  );
}
export default App;
