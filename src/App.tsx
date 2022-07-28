
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
    <div dir='rtl'>
      <div className='flex bg-slate-50 shadow justify-between'>
        <div className='p-1'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='p-1 pl-3'>سلام مهندس خوبی ...</div>
      </div>
     <TodoList/>
    </div>
  );
}

export default App;
