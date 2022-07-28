
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
    <div>
      <div className='flex bg-slate-50 shadow'>
        <div className='p-1'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
     <TodoList/>
    </div>
  );
}

export default App;
