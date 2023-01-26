import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Title } from './components/Title/Title';
import { List } from './components/List/List';
import { Container } from './components/Container/Container';
import { Control } from './components/Control/Control';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Container>
        <Title />
        <Control addTodo={addTodo} />
        <List tasks={tasks} />
      </Container>
    </div>
  );
}

export default App;
