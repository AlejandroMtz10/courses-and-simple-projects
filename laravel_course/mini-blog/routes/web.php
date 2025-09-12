<?php

    use Illuminate\Support\Facades\Route;
    use App\Models\Post;
    use App\Http\Controllers\PostController;

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

    Route::resource('posts', PostController::class);

    Route::get('/posts/create',[PostController::class,'create'])->name('posts.create');

    Route::post('/posts',[PostController::class,'store'])->name('posts.store');
?>