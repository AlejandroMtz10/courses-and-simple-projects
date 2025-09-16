@extends('layouts.app')

@section('content')
    <div class="container mx-auto p-4">
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

                    <div class="flex justify-end space-x-2 mt-2">
                        <a href="{{ route('posts.edit', $post) }}" 
                        class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                        Editar
                        </a>

                        <form action="{{ route('posts.destroy', $post) }}" method="POST" onsubmit="return confirm('¿Seguro que quieres eliminar este post?')">
                            @csrf
                            @method('DELETE')
                            <button class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Eliminar</button>
                        </form>
                    </div>
                    
                </div>
            @endforeach
        </div>
        <div class="mt-6">
            {{ $posts->links() }}
        </div>
    </div>
@endsection