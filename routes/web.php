<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->middleware(['guest']);
Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('projects', ProjectController::class)->only(['create', 'store', 'show', 'destroy'])->middleware(['auth', 'verified']);
Route::resource('tasks', TaskController::class)->only(['store', 'update', 'destroy'])->middleware(['auth', 'verified']);

Route::patch('toggle-complete/{task}', [TaskController::class, 'toggleComplete'])->name('tasks.toggle');

require __DIR__.'/auth.php';
