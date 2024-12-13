import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TaskCard from "@/Components/TaskCard";

export default function Show({auth, project, tasks}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        task: '',
        project_id: project.id
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tasks.store', project.id), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                {project.title}
            </h2>
        }>
            <Head title="Project" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="p-2 text-gray-900">
                            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                <form onSubmit={submit}>
                                    <InputLabel htmlFor="task" value="Task" />

                                    <textarea
                                        id="task"
                                        value={data.task}
                                        placeholder="New Task"
                                        className="mt-1 max-h-96 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        onChange={e => setData('task', e.target.value)} />
                                    <InputError message={errors.task} className="mt-2" />
                                    <PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton>
                                </form>
                            </div>
                            <div className="p-2 text-gray-900">
                                <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                    {tasks.map(task =>
                                        <TaskCard key={task.id} task={task} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
