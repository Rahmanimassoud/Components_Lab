import React, { useState } from "react";

const Component7 = () => {


    const [newTodo, setNewTodo] = useState("");

    const [todos, setTodos] = useState([]);

    // function to handel the new todos

    const handelNewTodoSubmit = (e) => {
        e.preventDefault();

        // prevent adding an empty string to the todo list
        if(newTodo.length === 0){
            return;
        }

        const todoItem = {
            text: newTodo,
            complete: false
        }




        // console.log(newTodo);
        setTodos([...todos, todoItem])
        // console.log(todoItem);

        setNewTodo("")
    }


    // function to delete a todo

    // how do we know which item to delet, since our todos state is an array, it has indexes and we have access to that
    const handelTodoDelete = (idx) => {

        const filteredTodos = todos.filter((todo, i) => {
            return i !== idx
        });
        setTodos(filteredTodos);
    }


    // function handel the compelete todos 
    const handelTodoCompelete = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if(idx === i) {
                todo.complete = ! todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);

    }



    return (
        <div>
            <form onSubmit={(event) => {handelNewTodoSubmit(event)}}>
                <input onChange={(e)=> {
                    setNewTodo(e.target.value)
                }} type="text" value={newTodo}/>
                <div>
                    <button>Add</button>
                </div>
            </form>

            {
                todos.map((eachTodo, idex)=> {

                    const todoClasses = ["bold", "italic"];

                    if(eachTodo.complete) {
                        todoClasses.push("line-through")
                    }


                    return (
                        <div key={idex}>
                            <input onChange={(event) => {handelTodoCompelete(idex)}} checked={eachTodo.complete} type="checkbox" />
                            <span className={todoClasses.join(" ")}>
                                {eachTodo.text}
                            </span>
                            <button onClick={(e)=> {handelTodoDelete(idex)}}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
};

export default Component7;
