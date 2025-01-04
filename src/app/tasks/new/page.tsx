import TaskForm from "@/components/TaskForm";
import {Label} from "@/components/ui/label";

export default function CreateTask() {

    return (
        <div className="p-8">
            <Label className="text-2xl font-bold inline-block w-full text-center">
                Create New Task
            </Label>
            <TaskForm/>
        </div>
    );
}
