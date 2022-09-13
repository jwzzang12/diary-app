import "./App.css";
import "./css/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditior from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useSelector } from "react-redux";
function App() {
  //useRef는 화면이 렌더링 되어서 값이 초기화 되는걸 막고 싶을 때 또는 Dom 제어할 때...

  const diaryData = useSelector((state) => state.diaryList);

  return (
    <div className="App">
      <Header />
      <DiaryEditior />
      <DiaryList diaryList={diaryData} />
      <Footer />
    </div>
  );
}

export default App;
