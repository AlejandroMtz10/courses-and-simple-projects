<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{{ $title ?? 'Mini Blog' }}</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
    
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Mini Blog</h1>
            <nav>
                <a href="/" class="px-3 hover:underline">Inicio</a>
                <a href="/about" class="px-3 hover:underline">Acerca de</a>
                <a href="/contact" class="px-3 hover:underline">Contacto</a>
            </nav>
        </div>
    </header>

    <!-- Contenido dinámico -->
    <main class="flex-grow container mx-auto p-6">
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4">
        <p>&copy; {{ date('Y') }} Mini Blog - Todos los derechos reservados</p>
    </footer>

</body>
</html>