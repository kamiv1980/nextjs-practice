"use server";

import { Priority } from "@/constants/tasks";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function updateTask(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const id = formData.get("id")?.toString();
  if (!id) {
    throw new Error("Task ID is missing");
  }

  const taskData = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    due_date: formData.get("due_date").toString() || "",
    priority: formData.get("priority")?.toString() || Priority.HIGH,
    is_completed: Boolean(formData.get("is_completed")),
  };

  const { data, error } = await supabase
    .from("tasks")
    .update(taskData)
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to update tasks: ${error.message}`);
  }

  console.log("Updated task:", data);

  revalidatePath("/tasks");
  redirect("/tasks");
}
