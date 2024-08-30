
import UserContextProvider from './context/UserContextProvider';
import TodoList from './components/TodoList';

function App() {
  return (
    <UserContextProvider>
      <TodoList/>
    </UserContextProvider>
  );
}


export default App
