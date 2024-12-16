import TaskForm from "@/components/TaskForm";
import {Label} from "@/components/ui/label";
import {getTaskById} from "@/app/tasks/actions/getTaskById";

export default async function EditTask({ params}) {
const id = params.id
    const { data: tasks } = await getTaskById(id);

    if(!tasks?.length){
        return null;
    }

    return (
        <div className="p-8">
            <Label className="text-2xl font-bold inline-block w-full text-center">
                Edit Task
            </Label>
            <TaskForm task={tasks[0]} isUpdatetask/>
        </div>
    );
}
