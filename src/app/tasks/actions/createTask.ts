"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Priority } from "@/constants/tasks";

export default async function createTask(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const todoData = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    due_date: formData.get("due_date").toString() || "",
    priority: formData.get("priority")?.toString() || Priority.HIGH,
    is_completed: Boolean(formData.get("is_completed")),
  };

  const { error } = await supabase.from("tasks").insert([todoData]);

  if (error) {
    throw new Error(`Failed to insert tasks: ${error.message}`);
  }

  revalidatePath("/tasks");

  redirect("/tasks");
}
