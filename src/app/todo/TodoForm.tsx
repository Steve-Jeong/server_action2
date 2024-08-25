"use client";

import { useRef } from "react";
import { createTodo } from "@/action/todos";
import SubmitButton from "./SubmitButton";

const TodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await createTodo(formData);
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      action={createTodo}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit(formData);
      }}
      className="flex max-w-sm flex-col gap-4"
    >
      <input
        type="text"
        name="title"
        className="rounded-md border border-slate-300 px-2 py-1 outline-none"
        required
      />
      <SubmitButton />
    </form>
  );
};

export default TodoForm;