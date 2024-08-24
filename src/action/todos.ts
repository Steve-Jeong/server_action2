"use server";
import client from "@/lib/prisma";
 
export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
 
  await client.todos.create({
    data: {
      title,
    },
  });
};

export const getTodos = async () => {
  const todos = await client.todos.findMany();
 
  return todos;
};