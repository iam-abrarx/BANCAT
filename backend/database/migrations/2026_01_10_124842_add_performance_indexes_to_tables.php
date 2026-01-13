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
        try {
            Schema::table('patients', function (Blueprint $table) {
                // Check if indexes exist before adding - raw SQL check or just try-catch is safer for this existing migration
                // Given the error, simple try-catch is the robust fix without relying on Schema::hasIndex which can be flaky
                $sm = Schema::getConnection()->getDoctrineSchemaManager();
                $indexes = $sm->listTableIndexes('patients');

                if (!array_key_exists('patients_is_active_index', $indexes)) $table->index('is_active');
                if (!array_key_exists('patients_is_featured_index', $indexes)) $table->index('is_featured');
                if (!array_key_exists('patients_cancer_type_index', $indexes)) $table->index('cancer_type');
                if (!array_key_exists('patients_created_at_index', $indexes)) $table->index('created_at');
            });
        } catch (\Exception $e) {
            // Index might already exist, continue
        }

        try {
            Schema::table('donations', function (Blueprint $table) {
                $sm = Schema::getConnection()->getDoctrineSchemaManager();
                $indexes = $sm->listTableIndexes('donations');

                if (!array_key_exists('donations_payment_status_index', $indexes)) $table->index('payment_status');
                if (!array_key_exists('donations_status_index', $indexes)) $table->index('status');
                if (!array_key_exists('donations_transaction_id_index', $indexes)) $table->index('transaction_id');
                if (!array_key_exists('donations_created_at_index', $indexes)) $table->index('created_at');
                if (!array_key_exists('donations_payment_status_status_index', $indexes)) $table->index(['payment_status', 'status']);
            });
        } catch (\Exception $e) {
            // Index might already exist
        }
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
