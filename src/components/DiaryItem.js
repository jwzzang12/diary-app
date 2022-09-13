import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDiary, modifyDiary } from "../store/diary";
export default function DiaryItem({ diaryInfo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(diaryInfo.contents);
  const contentsRef = useRef();
  const dispatch = useDispatch();
  return (
    <li className="diaryItem">
      <div className="info">
        <dl>
          <dt>글쓴이</dt>
          <dd>{diaryInfo.writer}</dd>
        </dl>
        <dl>
          <dt>오늘 기분</dt>
          <dd>{diaryInfo.emotion}</dd>
        </dl>
        <dl>
          <dt>날짜</dt>
          <dd>{new Date(diaryInfo.date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  if (localContents.length < 10) {
                    alert("10글자 이상");
                    contentsRef.current.focus();
                    return;
                  }
                  dispatch(modifyDiary(diaryInfo.id, localContents));
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">done</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(true);
                  setLocalContents(diaryInfo.contents);
                }}
              >
                <span className="material-icons">edit</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    dispatch(deleteDiary(diaryInfo.id));
                  }
                }}
              >
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <>
          <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        </>
      ) : (
        <div className="contents">{diaryInfo.contents}</div>
      )}
    </li>
  );
}
