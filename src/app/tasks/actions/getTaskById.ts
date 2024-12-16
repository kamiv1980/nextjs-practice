"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {Task} from "@/types/tasks";

export async function getTaskById(id: number): Promise<{ data: Task[] }> {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    let query = supabase
        .from("tasks")
        .select()
        .eq('id', id);

    const { data, error } = await query;

    if (error) {
        throw new Error(`Failed to fetch task: ${error.message}`);
    }

    return { data: data as Task[] };
}
