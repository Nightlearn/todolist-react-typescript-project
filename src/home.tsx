
import logo from './logo.svg';
import './home.css';
import TodoList from './components/todoList';

function Home() {
  return (
    <div dir='rtl'>
      <div className='flex bg-slate-50 shadow justify-between'>
        <div className='p-1 mx-3'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='p-1 pl-3'></div>
      </div>
     <TodoList/>
    </div>
  );
}

export default Home;
