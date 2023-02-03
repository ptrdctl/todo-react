import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Title } from './components/Title/Title';
import { List } from './components/List/List';
import { Control } from './components/Control/Control';
import { StyledContainer } from './App.styles';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <StyledContainer>
        <Title />
        <Control addTodo={addTodo} />
        <List tasks={tasks} />
      </StyledContainer>
    </div>
  );
}

export default App;
