@extends('layouts.app')

@section('content')
    <div class="text-center mt-20">
        <h1 class="text-4xl font-bold text-indigo-600">Bienvenido a mi Blog 🚀</h1>
        <p class="mt-4 text-gray-600">Aquí podrás registrarte y publicar tus propios posts.</p>

        @auth
            <a href="{{ url('/dashboard') }}" 
                class="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg">
                Ir al Dashboard
            </a>
        @else
            <a href="{{ route('login') }}" 
                class="mt-6 inline-block px-6 py-2 bg-gray-600 text-white rounded-lg mr-2">
                Login
            </a>
            <a href="{{ route('register') }}" 
                class="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg">
                Sign Up
            </a>
        @endauth
    </div>
@endsection