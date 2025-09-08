<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hola', function () {
    return "Hola Mundo desde Laravel 🚀";
});

Route::get('/about', function () {
    return view('about', ['name' => 'Alejandro']);
});
