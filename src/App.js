import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditior from "./components/DiaryEditor";

function App() {
  const insertDiary = function (writer, contents, emotion) {
    console.log("writer", writer);
    console.log("writer", contents);
    console.log("writer", emotion);
  };
  return (
    <div className="App">
      <Header />
      <DiaryEditior insertDiary={insertDiary} />
      <Footer />
    </div>
  );
}

export default App;
