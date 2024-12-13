import React, {useState} from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import DeleteIcon from "@/Components/DeleteIcon";
import Checkbox from "@/Components/Checkbox";
import EditIcon from "@/Components/EditIcon";
import {useForm, usePage, Link} from '@inertiajs/react';

export default function TaskCard({task}) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, errors } = useForm({
        task: task.task,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('tasks.update', task.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div className={`group w-full overflow-hidden my-4 bg-white border border-slate-300 rounded-lg ${task.completed && 'bg-slate-300 opacity-50'}`}>
            <div className={`p-6 text-gray-900`}>
                <Link as="button" href={route('tasks.toggle', task.id)} method="patch"><Checkbox className="mr-2" checked={task.completed} /></Link>
                {editing
                    ? <form onSubmit={submit}>
                        <textarea value={data.task} onChange={e => setData('task', e.target.value)} className="mt-1 max-h-96 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                        <InputError message={errors.task} className='mt-2' />
                        <div className="space-x-2">
                            <PrimaryButton className='mt-4'>Update</PrimaryButton>
                            <button className="mt-4" onClick={() => { setEditing(false); clearErrors(); }}>Cancel</button>
                        </div>
                    </form>
                    : <p className='inline mt-4 text-gray-900'>{task.task}</p>
                }

                <div className="float-right">
                    <button onClick={() => setEditing(true)}><EditIcon className="mr-2 float-right" /></button>
                    <Link as="button" href={route('tasks.destroy', task.id)} method="delete"><DeleteIcon className="float-right" /></Link>
                </div>
            </div>
        </div>
    )
}
