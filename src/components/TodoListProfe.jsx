import React from 'react'
import { TodoItem } from './TodoItemProfe';

export function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
}
