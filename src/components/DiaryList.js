import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryList, deleteDiary, modifyDiary }) {
  const total = diaryList.length;
  return (
    <div className="diaryList">
      <div className="container">
        <h2>List</h2>
        <p className="total">{total}개의 일기가 있습니다</p>
      </div>
      <ul>
        {diaryList.map((item, idx) => {
          return <DiaryItem key={idx} diaryInfo={item} deleteDiary={deleteDiary} modifyDiary={modifyDiary} />;
          //부모에서 자식 까지 타고내려가는 것 = props drilling
        })}
      </ul>
    </div>
  );
}
