import { ListWrapper, TasksList } from './List.styles';
import { Task } from '../Task/Task';

export const List = ({ tasks }) => {
  return (
    <ListWrapper>
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};
