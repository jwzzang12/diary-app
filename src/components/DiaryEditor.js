import { useRef, useState } from "react";
export default function DiaryEditior({ insertDiary }) {
  // const [writer, setWriter] = useState("안녕");
  // const [contents, setContents] = useState("초기값");
  // const [emotion, setEmotion] = useState(1);
  //useState 3개짜리 한개로 바꾸기
  const [diaryItem, setDiaryItem] = useState({
    writer: "dear",
    contents: "diary",
    emotion: 1,
  });
  const writerRef = useRef();
  const contentsRef = useRef();
  //ref 사용한 이유는 focus 주려고!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const insertDiaryItem = function () {
    if (diaryItem.writer.length < 2) {
      alert("최소 2글자");
      writerRef.current.focus();
      return false;
    } else if (diaryItem.contents.length < 3) {
      alert("최소 10글자");
      contentsRef.current.focus();
      return false;
    }
    //자식이 부모에게 데이터 전달하는 방법
    insertDiary(diaryItem.writer, diaryItem.contents, diaryItem.emotion);
    alert("일기 저장됨");
    setDiaryItem({
      writer: "",
      contents: "",
      emotion: 1,
    });
  };
  const changeDiaryItem = function (e) {
    setDiaryItem({
      ...diaryItem,
      [e.target.name]: e.target.value,
      //key값에 .으로 구분지어야하는 경우 []안에 넣어야 오류 안남
    });
  };

  return (
    <div className="container">
      <div className="section">
        <input type="text" name="writer" value={diaryItem.writer} placeholder="이름" onChange={changeDiaryItem} ref={writerRef} />
      </div>
      <div className="contents section">
        <textarea
          name="contents"
          id=""
          cols="30"
          rows="10"
          value={diaryItem.contents}
          ref={contentsRef}
          placeholder="내용"
          onChange={changeDiaryItem}
        ></textarea>
      </div>
      <select name="emotion" id="" value={diaryItem.emotion} onChange={changeDiaryItem}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div className="btns section">
        <button className="btn btnSave" onClick={insertDiaryItem}>
          save
        </button>
      </div>
    </div>
  );
}
