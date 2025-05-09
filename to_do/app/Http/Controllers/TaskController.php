<?php

namespace App\Http\Controllers;

use App\Models\task;
use Illuminate\Console\View\Components\Task as ComponentsTask;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $task['tasks'] = Task::all();
        //$task send the information on the table
        return view('task.index', $task);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $task = request() -> all();
        Task::create($task);
        return redirect ('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task -> delete();
        return redirect('/');
    }

    public function update_status($id,$status )
    {
        $task = Task::findOrFail($id);
        
        if ($task) {
            $status = 1;
            $task->status = $status;
            $task->save();
    
            return redirect('/');
        } else {
            return redirect('/');
        }
    }
}
