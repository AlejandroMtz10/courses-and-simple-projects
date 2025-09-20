<?php
    namespace App\Http\Controllers;

    use App\Http\Controllers\Controller;
    use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
    use Illuminate\Http\Request;
    use App\Models\Post;
    use App\Http\Requests\StorePostRequest;
    use Illuminate\Support\Facades\Auth;

    class PostController extends Controller
    {
        use AuthorizesRequests;
        /**
         * Display a listing of the resource.
         */
        public function index(Request $request)
        {
                $query = Post::with('user');

                // 🔍 Filtro por título
                if ($request->filled('title')) {
                    $query->where('title', 'like', '%' . $request->title . '%');
                }

                // 🔍 Filtro por usuario (creador)
                if ($request->filled('user_id')) {
                    $query->where('user_id', $request->user_id);
                }

                // 🔍 Filtro por fecha (ej. creada el día exacto)
                if ($request->filled('date')) {
                    $query->whereDate('created_at', $request->date);
                }

                $posts = $query->latest()->paginate(5);

                // Lista de usuarios para el filtro
                $users = \App\Models\User::select('id','name')->get();

                return view('posts.index', compact('posts', 'users'));
        }

        //Details of a post
        public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }


        /**
         * Show the form for creating a new resource.
         */
        public function create()
        {
            return view('posts.create');
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Post $post)
        {
            $this->authorize('update', $post);
            return view('posts.edit', compact('post'));
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, Post $post)
        {
            $request->validate([
                'title' => 'required|min:3',
                'content' => 'required|min:5',
            ]);

            $post->update($request->all());

            return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(Post $post)
        {
            $this->authorize('delete', $post);
            $post->delete();
            return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
        }

        public function store(StorePostRequest $request)
        {
            Auth::user()->posts()->create($request->validated());

            return redirect()->route('posts.index')
                            ->with('success', 'Post created!.');
        }
    }
