import { createTodo } from "@/action/todos";
 
const page = () => {
  return (
    <section className="px-16 py-12">
      <div className="container mx-auto flex flex-col gap-8">
        <h1 className="text-lg text-gray-900">Todos</h1>
        <form action={createTodo} className="flex max-w-sm flex-col gap-4">
          <input
            type="text"
            name="title"
            className="rounded-md border border-slate-300 px-2 py-1 outline-none"
            required
          />
          <button className="rounded-md bg-slate-300 py-2 hover:shadow-sm">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default page;