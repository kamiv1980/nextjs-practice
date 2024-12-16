"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import createTask from "@/app/tasks/actions/createTask";
import updateTask from "@/app/tasks/actions/updateTask";
import { Priority } from "@/constants/tasks";
import {Task} from "@/types/tasks";

type Props = {
    isUpdatetask?: boolean;
    task?: Task;
};

export const tasksForm: React.FC<Props> = ({ task, isUpdatetask = false }) => {
    return (
        <form
            action={isUpdatetask ? updateTask : createTask}
            className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg"
        >
            <input type="hidden" name="id" value={task?.id} />

            <div className="mb-6">
                <Label htmlFor="title" className="block text-lg font-medium text-gray-700">
                    Title
                </Label>
                <Input
                    id="title"
                    name="title"
                    defaultValue={task?.title}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div className="mb-6">
                <Label htmlFor="description" className="block text-lg font-medium text-gray-700">
                    Description
                </Label>
                <Textarea
                    id="description"
                    name="description"
                    defaultValue={task?.description}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div className="mb-6">
                <Label htmlFor="due_date" className="block text-lg font-medium text-gray-700">
                    Due Date
                </Label>
                <Input
                    id="due_date"
                    name="due_date"
                    type="date"
                    defaultValue={task?.due_date}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div className="mb-6">
                <Label htmlFor="priority" className="block text-lg font-medium text-gray-700">
                    Priority
                </Label>
                <Select
                    defaultValue={task?.priority ?? Priority.ANY}
                    name="priority"
                    required
                >
                    <SelectTrigger className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={Priority.LOW}>Low</SelectItem>
                        <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
                        <SelectItem value={Priority.HIGH}>High</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mb-6 flex items-center">
                <Checkbox
                    id="is_completed"
                    name="is_completed"
                    defaultChecked={task?.is_completed || false}
                    className="mr-2"
                />
                <Label htmlFor="is_completed" className="text-lg font-medium text-gray-700">
                    Is Completed
                </Label>
            </div>

            <Button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {isUpdatetask ? 'Update' : 'Add'}
            </Button>
        </form>
    );
};

export default tasksForm;
