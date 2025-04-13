<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
/*Route::get('/', function () {
    return view('task.index');
});*/

Route::get('/',[TaskController::class,'index']);//Show

Route::post('/', [TaskController::class,'store']);//Add

Route::delete('/{id}', [TaskController::class,'destroy']) -> name('task.destroy');//Delete

Route::put('/tasks/{id}/status/{status}', [TaskController::class, 'update_status'])->name('task.update_status'); // Update status

?>