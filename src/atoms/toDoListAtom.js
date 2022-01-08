import { atom } from "recoil";

export const toDoListState = atom({
  key: "toDoDoneState",
  default: [],
})