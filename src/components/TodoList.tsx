import React,{FC} from 'react';
import {ITodo} from "../Types";
import styled from "styled-components";
interface ToDolistProps{
    todo:ITodo
}

const ToDolist:FC<ToDolistProps> = ({todo}) => {
        return (
            <TodosLists>
        <Todos>
        {todo.title}
        </Todos>
        </TodosLists>
    )
};
const TodosLists=styled.ul`

`;
const Todos=styled.li`
`;
export default ToDolist;