@extends('layouts.app')

@section('content')
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4">Edit Post</h2>

        <form action="{{ route('posts.update', $post) }}" method="POST" class="space-y-4">
            @csrf
            @method('PUT')

            <div>
                <label class="block font-semibold">Title</label>
                <input type="text" name="title" value="{{ old('title', $post->title) }}"
                    class="w-full border rounded p-2">
                @error('title') <p class="text-red-500">{{ $message }}</p> @enderror
            </div>

            <div>
                <label class="block font-semibold">Content</label>
                <textarea name="content" rows="5" class="w-full border rounded p-2">{{ old('content', $post->content) }}</textarea>
                @error('content') <p class="text-red-500">{{ $message }}</p> @enderror
            </div>

            <button class="bg-blue-600 text-white px-4 py-2 rounded">Actualizar</button>
        </form>
    </div>
@endsection