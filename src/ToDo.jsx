import react, { useState } from "react";

export const ToDo = () => {
  const [done, setDone] = useState(false)

  const toggle = () => {
    done ? setDone(false):setDone(true)
  }

  return (
    <>
      <div onClick={toggle}>
        <span>
          {done ? "✅":""}
        </span>
        <span>やること</span>
      </div>
    </>
  )
}