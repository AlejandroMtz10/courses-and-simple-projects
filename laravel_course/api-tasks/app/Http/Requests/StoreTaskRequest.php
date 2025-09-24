<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Allow all users to make this request
    }

    public function rules(): array
    {
        return [
            'title' => 'required|min:3|max:100',
            'do_it' => 'required|boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Title is required.',
            'title.min'      => 'The minimum length is 3 characters for the title.',
            'do_it.boolean'  => 'Do it must be true or false.',
        ];
    }
}
