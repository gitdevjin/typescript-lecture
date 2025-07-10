import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}. {props.content}
      <button onClick={onClickButton}>Delete</button>
    </div>
  );
}
