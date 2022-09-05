import './App.css';
import { Provider } from './store_alternative/context_provider';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider>
      <AddTodo/>
      <TodoList/>
    </Provider>
  );
}

export default App;
