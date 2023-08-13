import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from './Components/Home';
import Editorpg from './Components/Editorpg';
import Info from './Components/Info';

function App() {
  return (
    <>
    {/* Add Toaster methods */}
      <div>
        <Toaster
        position="top-right"
        toastOptions={{
          success:{
            duration: 2000,
          }
        }}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/editor/:roomid" element={<Editorpg/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
