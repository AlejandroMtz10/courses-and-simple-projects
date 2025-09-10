<?php

    use Illuminate\Support\Facades\Route;
    use App\Models\Post;

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

    Route::get('/posts', function () {
        $posts = Post::with('user')->get(); // obtenemos posts con usuario
        return view('posts.index', compact('posts'));
    });

?>