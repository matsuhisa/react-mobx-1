import react from "react";
import { selector } from "recoil";
import { toDoListState } from "../atoms/toDoListAtom";

export const toDoDoneCountState = selector({
  key: "toDoDoneCountState",
  get: ({get}) => {
    const toDoItems = get(toDoListState)
    const toDoDoneItems = toDoItems.filter((toDoItem) => toDoItem.isDone === true)
    return toDoDoneItems.length
  },
})