import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, Head } from "@inertiajs/react";

export default function Create({auth}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'), { onSuccess: () => reset() });
    }
    return (
        <AuthenticatedLayout>
            <Head title="New Project" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <InputLabel htmlFor="title" value="Title" />

                    <TextInput
                        id="title"
                        value={data.title}
                        placeholder="New Project"
                        className="mt-1 block w-full bg-white"
                        onChange={e => setData('title', e.target.value)} />
                    <InputError message={errors.title} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Create</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
