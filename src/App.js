import { Title } from './components/Title/Title';
import { List } from './components/List/List';
import { Container } from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <List />
      </Container>

    </div>
  );
}

export default App;
