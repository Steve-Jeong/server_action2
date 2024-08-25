import { getTodos } from "@/action/todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Page = async () => {
  const todos = await getTodos();

  return (
    <section className="px-16 py-12">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="text-lg text-gray-900">Todos</h1>
        <TodoForm />
        <TodoList initialTodos={todos} />
      </div>
    </section>
  );
};

export default Page;
