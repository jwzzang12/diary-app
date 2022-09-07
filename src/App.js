import "./App.css";
import "./css/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditior from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useRef, useState } from "react";

function App() {
  const dataId = useRef(0);
  //useRef는 화면이 렌더링 되어서 값이 초기화 되는걸 막고 싶을 때 또는 Dom 제어할 때...
  const modifyDiary = function (id, localContents) {
    console.log(localContents);
    const modifiedDiaryData = diaryData.map((item, idx) => {
      return item.id === id ? { ...item, contents: localContents } : { ...item };
    });
    setDiaryData(modifiedDiaryData);
  };
  const deleteDiary = function (id) {
    console.log("id===", id);
    const filteredDiaryData = diaryData.filter((item, idx) => {
      return item.id !== id;
    });
    setDiaryData(filteredDiaryData);
  };
  const insertDiary = function (writer, contents, emotion) {
    const insertDiaryData = { writer: writer, contents: contents, emotion: emotion, date: new Date().getTime(), id: dataId.current };

    dataId.current += 1;
    setDiaryData([insertDiaryData, ...diaryData]);
    //새로 추가한 데이터 + 기존에 있던 data 흩뿌린 배열 계속 렌더링
  };

  const [diaryData, setDiaryData] = useState([]);
  // const diaryData = [
  //   { id: 1, writer: "일번", contents: "ㅎㅇ", emotion: 1, date: 1662512794449 },
  //   { id: 2, writer: "이번", contents: "ㅎㅇ", emotion: 1, date: 5662512794449 },
  // ];

  return (
    <div className="App">
      <Header />
      <DiaryEditior insertDiary={insertDiary} />
      <DiaryList diaryList={diaryData} deleteDiary={deleteDiary} modifyDiary={modifyDiary} />
      <Footer />
    </div>
  );
}

export default App;
