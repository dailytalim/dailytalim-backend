<?php

namespace Modules\Hadith\Models;

use App\Models\User;
use App\Traits\UserStamp;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Hadith\Database\Factories\KitabFactory;
use Modules\Support\Models\BaseModel;
use Modules\Support\Traits\ActivityLog;
use Modules\Support\Traits\Searchable;

class Kitab extends BaseModel
{
    use ActivityLog, HasFactory, Searchable, SoftDeletes;
    use UserStamp;

    protected $table = 'kitabs';

    protected $casts = [
        'active' => 'boolean',
    ];

    protected static function newFactory(): Factory
    {
        return KitabFactory::new();
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function deletedBy()
    {
        return $this->belongsTo(User::class, 'deleted_by');
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }

    public function hadiths()
    {
        return $this->hasMany(Hadith::class);
    }
}
