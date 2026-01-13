<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = \App\Models\Blog::query();

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title_en', 'like', "%{$search}%")
                  ->orWhere('title_bn', 'like', "%{$search}%");
            });
        }

        // Public view: only published
        if (!$request->user() || !$request->user()->tokenCan('admin')) {
             $query->where('is_published', true);
        }

        return response()->json($query->latest()->paginate(10));
    }

    public function store(Request $request)
    {
        \Illuminate\Support\Facades\Log::info('Blog Store Request:', $request->all());

        $validated = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_bn' => 'nullable|string|max:255',
            'content_en' => 'required|string',
            'content_bn' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'is_published' => 'boolean',
            'author' => 'nullable|string',
            'excerpt' => 'nullable|string',
            'slug' => 'nullable|string|unique:blogs,slug',
            'published_at' => 'nullable|date',
            'categories' => 'nullable', // Accepts JSON string or array
            'tags' => 'nullable',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('blogs', 'public');
            $validated['image'] = 'storage/' . $path;
        }

        // Handle JSON fields if they come as strings
        if (isset($validated['categories']) && is_string($validated['categories'])) {
            $validated['categories'] = json_decode($validated['categories'], true);
        }
        if (isset($validated['tags']) && is_string($validated['tags'])) {
             $validated['tags'] = json_decode($validated['tags'], true);
        }

        // Handle Slug
        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title_en']);
            // Ensure unique
            $count = \App\Models\Blog::where('slug', $validated['slug'])->count();
            if ($count > 0) {
                $validated['slug'] .= '-' . ($count + 1);
            }
        }

        $blog = \App\Models\Blog::create($validated);

        return response()->json($blog, 201);
    }

    public function show($id)
    {
        $blog = \App\Models\Blog::where('id', $id)->orWhere('slug', $id)->firstOrFail();
        
        // Increment views
        $blog->increment('views');

        return response()->json($blog);
    }

    public function update(Request $request, string $id)
    {
        $blog = \App\Models\Blog::findOrFail($id);

        $validated = $request->validate([
            'title_en' => 'sometimes|string|max:255',
            'title_bn' => 'nullable|string|max:255',
            'content_en' => 'sometimes|string',
            'content_bn' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'is_published' => 'boolean',
            'author' => 'nullable|string',
            'excerpt' => 'nullable|string',
            'slug' => 'nullable|string|unique:blogs,slug,' . $id,
            'published_at' => 'nullable|date',
            'categories' => 'nullable',
            'tags' => 'nullable',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
             // Delete old image if exists
             if ($blog->image && file_exists(public_path($blog->image))) {
                unlink(public_path($blog->image));
             }
            $path = $request->file('image')->store('blogs', 'public');
            $validated['image'] = 'storage/' . $path;
        }

        // Handle JSON fields
        if (isset($validated['categories']) && is_string($validated['categories'])) {
            $validated['categories'] = json_decode($validated['categories'], true);
        }
        if (isset($validated['tags']) && is_string($validated['tags'])) {
             $validated['tags'] = json_decode($validated['tags'], true);
        }

        // Handle Slug update if provided separately or title changes
        if (isset($validated['title_en']) && empty($request->input('slug'))) {
             // If slug NOT provided, auto generate
             $validated['slug'] = \Illuminate\Support\Str::slug($validated['title_en']);
             // Check unique logic typically needed here too
        }

        $blog->update($validated);

        return response()->json($blog);
    }

    public function destroy(string $id)
    {
        $blog = \App\Models\Blog::findOrFail($id);
        if ($blog->image && file_exists(public_path($blog->image))) {
            unlink(public_path($blog->image));
        }
        $blog->delete();

        return response()->json(['message' => 'Blog deleted successfully']);
    }
}
