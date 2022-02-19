
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';
import TodoItemPage from './pages/TodoItemPage';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';
import UserPage from './pages/UserPage';

const App2 = () => {
    const handleClick=()=>{
       console.log(1)
    }
    return (
        <BrowserRouter>
        <div>
            <NavLink to={'/users'}>Users</NavLink>
             <NavLink to={'/todos'}>ToDos</NavLink>
        </div>
        <Routes>
            <Route path='/users' element={<UserPage/>}/>
            <Route path='/users/:userId' element={<UserItemPage/>}/>
            <Route path='/todos' element={<TodoPage/>}/>
            <Route path='/todos/:todoId' element={<TodoItemPage/>}/>
        </Routes>
          
        </BrowserRouter>
    );
};

export default App2;