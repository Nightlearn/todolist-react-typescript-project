
import logo from './../../images/logo.svg';
import './home.css';
import TodoList from '../todoList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function Home() {
  return (
    <div dir='rtl'>
      <div className='flex bg-slate-50 shadow justify-between'>
        <div className='p-1 mx-3'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='p-1 pl-3'></div>
      </div>
      <TodoList />
      <ToastContainer />
    </div>
  );
}

export default Home;
