@extends('layouts.app')

@section('content')
    <div class="p-6 bg-white shadow rounded-lg">
        <h2 class="text-3xl font-bold">{{ $post->title }}</h2>

        <p class="mt-2 text-gray-700">{{ $post->content }}</p>
        <p class="text-sm text-gray-500 mt-4">
            Autor: {{ $post->user->name }} | Publicado: {{ $post->created_at->format('d/m/Y H:i') }}
        </p>
    </div>

    <a href="{{ route('posts.index') }}" 
        class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        ← Volver a la lista
    </a>
@endsection
