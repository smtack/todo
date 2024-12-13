<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'task' => 'required|min:4|max:255'
        ]);

        Task::create([
            'user_id' => $request->user()->id,
            'project_id' => $request->project_id,
            'task' => $validated['task'],
        ]);

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task): RedirectResponse
    {
        Gate::authorize('update', $task);

        $validated = $request->validate([
            'task' => 'required|min:4|max:255',
        ]);

        $task->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        Gate::authorize('delete', $task);

        $task->delete();

        return back();
    }

    /**
     * Toggle completed
     */
    public function toggleComplete(Task $task)
    {
        Gate::authorize('update', $task);

        $task->completed = !$task->completed;

        $task->save();

        return back();
    }
}
