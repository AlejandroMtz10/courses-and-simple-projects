@extends('layouts.app')

@section('content')
    <h2 class="text-2xl font-bold mb-4">Crear nuevo Post</h2>

    {{-- Mostrar errores de validación --}}
    @if ($errors->any())
        <div class="mb-4 p-4 bg-red-100 text-red-700 rounded">
            <ul class="list-disc ml-6">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('posts.store') }}" method="POST" class="space-y-4">
        @csrf
        <div>
            <label class="block font-semibold">Title</label>
            <input type="text" name="title" value="{{ old('title') }}" 
                class="w-full border rounded p-2">
        </div>

        <div>
            <label class="block font-semibold">Content</label>
            <textarea name="content" rows="5" class="w-full border rounded p-2">{{ old('content') }}</textarea>
        </div>

        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Save Post
        </button>
    </form>
@endsection