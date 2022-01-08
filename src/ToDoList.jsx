import react, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "./atoms/toDoListAtom";
import { ToDo } from "./ToDo";

export const ToDoList = () => {
  const [toDoItems, setToDoItems] = useRecoilState(toDoListState)

  useEffect(() => {
    const items = [...Array(10)].map((_, index) => { return { id: index + 1, isDone: false } })
    setToDoItems(items)
  }, [])

  return (
    <>
      <h1>リスト</h1>
      {toDoItems.map((item) => {
        return (
          <ToDo key={item.id} item={item} />
        )
      })
      }
    </>
  )
}