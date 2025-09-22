<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

