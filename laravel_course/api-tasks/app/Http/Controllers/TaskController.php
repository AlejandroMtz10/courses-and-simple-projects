<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use App\Http\Requests\StoreTaskRequest;

class TaskController extends Controller
{
    public function index()
    {
        return TaskResource::collection(Task::all());
    }

    public function show($id)
    {
        $task = Task::findOrFail($id);
        return new TaskResource($task);
    }

    public function store(StoreTaskRequest $request)
    {
        $task = Task::create($request->validated());

        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $data = $request->all();

        // mapear done -> do_it
        if (isset($data['done'])) {
            $data['do_it'] = $data['done'];
            unset($data['done']);
        }

        $task->update($data);

        return new TaskResource($task);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}