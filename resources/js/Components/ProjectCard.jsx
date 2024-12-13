import React from "react";
import DeleteIcon from "./DeleteIcon";
import { Link } from "@inertiajs/react";
import { useState } from 'react';

export default function ProjectCard({project}) {
    const [hoverState, setHoverState] = useState(false);

    const handleHover = () => {
        setHoverState(true);
    }

    const handleLeave = () => {
        setHoverState(false);
    }

    return (
        <Link href={route('projects.show', project.id)}>
            <div
                className="group overflow-hidden my-4 bg-white shadow-sm sm:rounded-lg hover:bg-purple-600 hover:cursor-pointer hover:shadow-slate-500"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <div className="p-6 text-gray-900 group-hover:text-white">
                    <p className="inline">{project.title}</p>

                    <Link as="button" className="float-right" href={route('projects.destroy', project.id)} method="delete"><DeleteIcon hoverState={hoverState} /></Link>
                </div>
            </div>
        </Link>
    );
}
