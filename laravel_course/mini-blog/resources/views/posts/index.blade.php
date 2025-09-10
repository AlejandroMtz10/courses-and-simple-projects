@extends('layouts.app')

@section('content')
    <h2 class="text-2xl font-bold mb-4">Lista de Posts</h2>

    <div class="space-y-4">
        @foreach ($posts as $post)
            <div class="p-4 border rounded-lg shadow bg-white">
                <h3 class="text-xl font-semibold">{{ $post->title }}</h3>
                <p class="text-gray-700">{{ $post->content }}</p>
                <p class="text-sm text-gray-500 mt-2">
                    Autor: {{ $post->user->name }} | Publicado: {{ $post->created_at->format('d/m/Y') }}
                </p>
            </div>
        @endforeach
    </div>
@endsection