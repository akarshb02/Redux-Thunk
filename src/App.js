import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Link to={'/'}>Home User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Userlisting/>}></Route>
          <Route path='/user/add' element={<Adduser/>}></Route>
          <Route path='/user/edit/:code' element={<Updateuser/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
