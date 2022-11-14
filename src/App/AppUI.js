import React from "react";
// También es importante importar nuestro contexto
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoEmpty } from "../TodoEmpty";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <TodoEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
