import TodoList from "./Todos/TodoList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <ToastContainer /> */}
      <TodoList/>
    </div>
  );
}

export default App;
