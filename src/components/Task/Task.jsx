import {TaskWrapper, TaskText} from './Task.styles';

export const Task = ({task}) => {
  return (
    <TaskWrapper>
      <TaskText>{task.text}</TaskText>
    </TaskWrapper>
  )
};
