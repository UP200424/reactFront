import { memo } from "react";

const Todos = ({ todos, addTodo } ) => {   // App8_useCallback
// const Todos = ({ todos }) => {   // App2_useState
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            {/* activar la siguiente linea con App8_useCallback  */}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

// export default memo(Todos);   // No Render Todos
export default Todos;       //    Render Todos
