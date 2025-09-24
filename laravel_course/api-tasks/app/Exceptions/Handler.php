<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $levels = [];

    protected $dontReport = [];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        //
    }

    public function render($request, Throwable $e)
    {
        if ($request->expectsJson()) {
            // Validation errors → 422
            if ($e instanceof ValidationException) {
                return response()->json([
                    'message' => 'Validation failed.',
                    'errors' => $e->errors(),
                ], 422);
            }

            // Model not found → 404
            if ($e instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Resource not found.',
                ], 404);
            }

            // Authentication errors → 401
            if ($e instanceof AuthenticationException) {
                return response()->json([
                    'message' => 'Unauthorized.',
                ], 401);
            }

            // Default → 500
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }

        return parent::render($request, $e);
    }
}
