
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='flex '>
        <div className='p-1'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>


      </div>
      <div className="w-full flex items-center justify-center  " dir='ltr'>

        <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-700">Todo List</h1>
            <div className="flex mt-4">
              <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
              />
              <button
                className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
          <div className='max-h-[300px] overflow-auto'>
            <div className="flex mb-4 items-center">
              {/* normal part */}
              <p className={`w-full ${true ? "line-through text-green-700" : "text-gray-700"}`}>{"data.text"}</p>
              <button
                className={`flex-shrink-0 p-2 ml-4 border-2 rounded hover:text-white 
              ${true ? "text-green-700 border-green-700 hover:bg-green-700" : "text-gray-700 border-gray-700 hover:bg-gray-700"}`}
              >{true ? "Done" : "Not done"}</button>
              <button
                className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
              >
                Remove</button>
              <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
              >
                edit</button>

              {/* edit part */}
              {/* <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
              />
              <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
              >
                edited</button> */}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
