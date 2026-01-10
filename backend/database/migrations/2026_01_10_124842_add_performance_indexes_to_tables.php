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
        Schema::table('patients', function (Blueprint $table) {
            $table->index('is_active');
            $table->index('is_featured');
            $table->index('cancer_type');
            $table->index('created_at');
        });

        Schema::table('donations', function (Blueprint $table) {
            $table->index('payment_status');
            $table->index('status');
            $table->index('transaction_id');
            $table->index('created_at');
            $table->index(['payment_status', 'status']); // Composite index for common query
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex(['is_featured']);
            $table->dropIndex(['cancer_type']);
            $table->dropIndex(['created_at']);
        });

        Schema::table('donations', function (Blueprint $table) {
            $table->dropIndex(['payment_status']);
            $table->dropIndex(['status']);
            $table->dropIndex(['transaction_id']);
            $table->dropIndex(['created_at']);
            $table->dropIndex(['payment_status', 'status']);
        });
    }
};
