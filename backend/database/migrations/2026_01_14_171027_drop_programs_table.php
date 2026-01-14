<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('programs');
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_bn')->nullable();
            $table->string('slug')->unique();
            $table->text('description_en');
            $table->text('description_bn')->nullable();
            $table->string('image')->nullable();
            $table->date('date')->nullable();
            $table->string('location_en')->nullable();
            $table->string('location_bn')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }
};
