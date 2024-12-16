import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {getTasks} from "@/app/tasks/actions/getTasks";
import Link from "next/link";
import deleteTask from "@/app/tasks/actions/deleteTask";

export default async function TaskList({searchParams}:any) {
    const { data: tasks } = await getTasks(searchParams);

    if(!tasks?.length){
        return null;
    }

    return (
        <div className="w-3/4">
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Card>
                            <CardHeader>
                                <CardTitle><p className={task.is_completed ? "line-through" : "" }>{task.title}</p></CardTitle>
                                <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <strong>Due:</strong> {task.due_date}
                                </p>
                                <p>
                                    <strong>Priority:</strong> {task.priority}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={"px-4 py-2 rounded bg-gray-500 text-white justify-end"}
                                >
                                    <Link
                                        href={`/tasks/${task.id}`}
                                    >
                                        Edit
                                    </Link>
                                </Button>
                                <form
                                    action={deleteTask}
                                    className="inline-block"
                                >
                                    <input type="hidden" name="id" value={task.id}/>
                                    <Button
                                        type="submit"
                                        className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
}
