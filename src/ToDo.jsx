import react, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "./atoms/toDoListAtom";

export const ToDo = ({item}) => {
  const [done, setDone] = useState(item.defaultDone)
  const [toDoItems, setToDoItems] = useRecoilState(toDoListState)
  const index = toDoItems.findIndex((toDoItem) => toDoItem === item)

  const toggle = () => {
    done ? setDone(false):setDone(true)
  }

  useEffect(() => {
    setToDoItems(
      [...toDoItems.slice(0, index), {...item, isDone: done}, ...toDoItems.slice(index+1)]
    )
  }, [done]);

  return (
    <>
      <div onClick={toggle}>
        <span>{item.id}</span>
        <span>
          {done ? "✅":""}
        </span>
        <span>やること</span>
      </div>
    </>
  )
}