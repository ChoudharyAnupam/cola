import React, { Children, createContext, useState } from "react";

// const ProjectDataContext = createContext({});

export const ProjectDataContext = () => {

    const [todos, setTods] = useState([
        { text : "a" },
        { text : "b" },
        { text : "c" }
    ]);

    const selectTodo = (todo, idx) => {
        console.log("do something with the todo here and then call setTodos ", todo.text, idx);
    };

    return(
        <ProjectDataContext.Provider value={{selectTodo, todos}}>
            {children}
        </ProjectDataContext.Provider>
    );

}