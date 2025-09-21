@extends('layouts.app')

@section('content')
<div class="container mx-auto p-4">                
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold mb-4">Posts list</h2>
        </div>
        
        <div class="flex justify-between items-center mb-4">
            <form method="GET" action="{{ route('posts.index') }}" class="mb-6 flex gap-4">
                <!-- Buscar por título -->
                <input type="text" name="title" value="{{ request('title') }}"
                    placeholder="Buscar por título"
                    class="border rounded px-3 py-2">

                <!-- Filtrar por autor -->
                <select name="user_id" class="border rounded px-3 py-2">
                    <option value="">-- Todos los autores --</option>
                    @foreach($users as $user)
                        <option value="{{ $user->id }}" {{ request('user_id') == $user->id ? 'selected' : '' }}>
                            {{ $user->name }}
                        </option>
                    @endforeach
                </select>
                
                <!-- Filtrar por fecha -->
                <input type="date" name="date" value="{{ request('date') }}"
                    class="border rounded px-3 py-2">

                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
                    Buscar
                </button>
            </form>

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
                @can('update', $post)
                    <a href="{{ route('posts.edit', $post) }}" 
                    class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Edit
                    </a>
                @endcan

                @can('delete', $post)
                    <form action="{{ route('posts.destroy', $post) }}" method="POST" class="inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" 
                            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            onclick="return confirm('¿Do you really want to delete this post?')">
                            Delete
                        </button>
                    </form>
                @endcan

            </div>

        </div>
        @endforeach
    </div>
    <div class="mt-6">
        {{ $posts->links() }}
    </div>
</div>
@endsection