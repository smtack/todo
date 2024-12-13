<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Project;

class DashboardController extends Controller
{
    // Welcome Screen
    public function index()
    {
        return Inertia::render('Welcome');
    }

    // Dashboard
    public function dashboard()
    {
        $projects = Project::where('user_id', auth()->user()->id)->latest()->paginate(6);

        return Inertia::render('Dashboard', compact('projects'));
    }
}
