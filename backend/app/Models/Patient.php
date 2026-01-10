<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name_en',
        'name_bn',
        'photo',
        'age',
        'gender',
        'cancer_type',
        'diagnosis_date',
        'location',
        'phone',
        'email',
        'donor_name',
        'medical_summary_en',
        'medical_summary_bn',
        'treatment_cost_required',
        'treatment_cost_raised',
        'fund_raised',
        'prescriptions',
        'is_active',
        'is_featured',
        'status',
    ];

    protected $casts = [
        'diagnosis_date' => 'date',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
        'treatment_cost_required' => 'decimal:2',
        'treatment_cost_raised' => 'decimal:2',
    ];

    // Removed raised_amount accessor to prevent N+1 queries
    // Use eager loading with withSum in controllers instead

    public function updates()
    {
        return $this->hasMany(PatientUpdate::class);
    }

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }
}
