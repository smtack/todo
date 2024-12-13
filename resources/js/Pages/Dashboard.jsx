import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProjectCard from '@/Components/ProjectCard';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, projects }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href={route('projects.create')}>
                                <PrimaryButton>New Project</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {projects.data.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='float-right'>
                        {projects.links.map(link => (
                            link.url ?
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{__html: link.label}}
                                className={`p-1 mx-1 ${link.active ? "text-purple-600 font-bold" : ""}`}
                            />
                            :
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{__html: link.label}}
                                className={"px-1 mx-1 text-slate-600"}>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
