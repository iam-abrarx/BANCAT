<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_en',
        'title_bn',
        'content_en',
        'content_bn',
        'slug',
        'image',
        'author',
        'is_published',
        'published_at',
        'views',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'excerpt',
        'categories',
        'tags',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
        'views' => 'integer',
        'categories' => 'array',
        'tags' => 'array',
    ];
}
