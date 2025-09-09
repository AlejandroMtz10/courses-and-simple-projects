<?php

    use Illuminate\Support\Facades\Route;

    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/', function () {
        return view('home', ['title' => 'Inicio']);
    });

    Route::get('/about', function () {
        return view('about', ['title' => 'Acerca de']);
    });

    Route::get('/contact', function () {
        return view('contact', ['title' => 'Contacto']);
    });

?>