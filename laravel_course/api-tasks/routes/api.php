<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/ping', function () {
    return response()->json([
        'message' => 'pong'
    ]);
});

Route::get('/tasks', function () {
    return response()->json([
        ['id' => 1, 'title' => 'Aprender Laravel APIs'],
        ['id' => 2, 'title' => 'Practicar con Postman'],
    ]);
});

//Rout to TaskController
Route::middleware('auth:sanctum')->get('/tasks', [TaskController::class, 'index']);


// Protected routes login
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('tasks', TaskController::class);
});