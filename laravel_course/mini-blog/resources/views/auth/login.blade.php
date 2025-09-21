@extends('layouts.app')

@section('content')
    <div class="container mx-auto p-4">
        <div class="container mx-auto p-4 max-w-md bg-white rounded-lg shadow-md">
            <div class="flex justify-center pb-2">
                <img src="{{ asset('images/small_logo.webp') }}" alt="Logo Alejandro Developer" class="w-40 h-auto">
            </div>
            <hr class="my-2 border-gray-200 sm:mx-auto lg:my-2">
            <div class="text-center mb-6 pt-2">
                <h1 class="text-3xl font-bold text-indigo-600">Inicia sesión en tu Blog</h1>
                <p class="text-gray-500">Publica y comparte tus ideas con el mundo 🌍</p>
            </div>

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <!-- Email -->
                <div>
                    <x-input-label for="email" :value="__('Correo electrónico')" />
                    <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required
                        autofocus />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <x-input-label for="password" :value="__('Contraseña')" />
                    <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-between items-center">
                    <a href="{{ route('password.request') }}" class="text-sm text-gray-500">¿Olvidaste tu contraseña?</a>
                    <x-primary-button>
                        {{ __('Ingresar') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
@endsection