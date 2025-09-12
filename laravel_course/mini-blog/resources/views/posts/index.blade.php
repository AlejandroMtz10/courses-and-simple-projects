@extends('layouts.app')

@section('content')
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold mb-4">Lista de Posts</h2>

        <a href="{{ route('posts.create') }}" 
            class="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            + New post
        </a>
    </div>


    <div class="space-y-4">
        @foreach ($posts as $post)
            <div class="p-4 border rounded-lg shadow bg-white">
                <h3 class="text-xl font-semibold">
                    <a href="{{ route('posts.show', $post) }}" class="text-blue-600 hover:underline">
                        {{ $post->title }}
                    </a>
                </h3>
                <p class="text-gray-700">{{ $post->content }}</p>
                <p class="text-sm text-gray-500 mt-2">
                    Autor: {{ $post->user->name }} | Publicado: {{ $post->created_at->format('d/m/Y') }}
                </p>
            </div>
        @endforeach
    </div>
@endsection