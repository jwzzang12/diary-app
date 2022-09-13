export const ACTION_TYPES = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  DELETE_DIARY: "deleteDiary",
};
export const initState = {
  count: 2,
  diaryList: [
    { id: 0, writer: "아구몬", contents: "안녕01", emotion: 5, date: new Date().getTime() },
    { id: 1, writer: "엔젤몬", contents: "안녕02", emotion: 5, date: new Date().getTime() },
  ],
};
export const insertDiary = (diaryItem) => {
  return {
    type: ACTION_TYPES.INSERT_DIARY,
    payload: diaryItem,
  };
};
export const deleteDiary = (id) => {
  return {
    type: ACTION_TYPES.DELETE_DIARY,
    payload: { id },
  };
};
export const modifyDiary = (id, localContents) => {
  return {
    type: ACTION_TYPES.MODIFY_DIARY,
    payload: { id, localContents },
  };
};
const diary = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INSERT_DIARY: {
      const newDiaryItem = {
        ...action.payload,
      };
      return {
        count: state.count + 1,
        diaryList: [newDiaryItem, ...state.diaryList],
      };
    }
    case ACTION_TYPES.DELETE_DIARY: {
      return {
        count: state.count - 1,
        diaryList: state.diaryList.filter((item, idx) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    case ACTION_TYPES.MODIFY_DIARY: {
      // const id = action.payload.id;
      const localContents = action.payload.localContents;
      return {
        count: state.count,
        diaryList: state.diaryList.map((item, idx) => {
          if (item.id === action.payload.id) {
            return { ...item, contents: localContents };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};
export default diary;
