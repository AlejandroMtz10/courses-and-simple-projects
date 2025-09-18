<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Validate permissions
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:5|max:100|unique:posts,title',
            'content' => 'required|string|min:10|max:500',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'El título es obligatorio.',
            'title.min'      => 'El título debe tener mínimo 5 caracteres.',
            'title.unique'   => 'Este título ya existe, elige otro.',
            'content.required' => 'El contenido no puede estar vacío.',
            'content.min'    => 'El contenido debe tener mínimo 10 caracteres.',
        ];
    }
}
