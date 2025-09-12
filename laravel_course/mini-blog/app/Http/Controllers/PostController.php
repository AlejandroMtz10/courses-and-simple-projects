<?php

    namespace App\Http\Controllers;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use App\Models\Post;

    class PostController extends Controller
    {
        /**
         * Display a listing of the resource.
         */
        public function index()
        {
            $posts = Post::with('user')->latest()->paginate(5);
            return view('posts.index', compact('posts'));
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
         * Store a newly created resource in storage.
         */
        public function store(Request $request)
        {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]);

            $validated['user_id'] = 1; // assuming user is authenticated

            Post::create($validated);
            
            return redirect()->route('posts.index')->with('success', 'Post created successfully.');
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Post $post)
        {
            return view('posts/edit',compact('post'));
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
            $post->delete();
            return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
        }
    }
