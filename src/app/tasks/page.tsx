import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import Link from "next/link";
import {Label} from "@/components/ui/label";

export default async function Tasks(props: { searchParams: Promise<any> }) {
    const searchParams = await props.searchParams;

    return(
        <main className="min-h-screen flex flex-col items-center p-6">
            <Label className="text-2xl font-bold">
                Tasks List
            </Label>
            <div className="flex max-md:flex-col pt-4 gap-8 w-full" >
                <TaskFilter searchParams={searchParams}/>
                <TaskList searchParams={searchParams}/>
            </div>
            <Link
                href="/tasks/new"
                className="inline-block self-end mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
                Create a new task
            </Link>
        </main>
    )
}
