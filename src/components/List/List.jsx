import {Input} from '../Input/Input';
import {ListWrapper, TasksList} from './List.styles';
import {useState} from "react";
import { nanoid } from 'nanoid'
import {Task} from "../Task/Task";

export const List = () => {

  const [tasks, setTasks] = useState([]);
  const addTodo = (text) => {
    const id = nanoid();
    const newTask = {id, text};
    setTasks([...tasks, newTask]);
  };

  return(
    <ListWrapper>
      <Input addTodo={addTodo} />

      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};