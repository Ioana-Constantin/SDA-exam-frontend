import './App.css';
import AllTasks from './components/allTasks/AllTasks';
import SideBar from './components/sideBar/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Departments from './components/departments/Departments';
import Users from './components/users/Users';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="tasks" element={<div><Header /><SideBar /><AllTasks /></div>} />
          <Route path="users" element={<div><Header /><div><SideBar /><Users /></div></div>} />
          <Route path="departments" element={<div><Header /><div><SideBar /><Departments /></div></div>} />
          <Route path="*" element={<div><Header /><div><SideBar /><AllTasks /></div></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
