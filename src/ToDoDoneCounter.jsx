import react from "react";
import { useRecoilValue } from "recoil";
import { toDoDoneCountState } from "./selectors/toDoDoneCountSelector";

export const ToDoDoneCounter = () => {
  const count = useRecoilValue(toDoDoneCountState)
  return (
    <>
      total {count}
    </>
  );
}