// import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import TodoList from './component/TodoList'

function App() {
  return (
    <>
      {/* <NavBar />
      <div className="content">
        <Home />
      </div> */}
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
