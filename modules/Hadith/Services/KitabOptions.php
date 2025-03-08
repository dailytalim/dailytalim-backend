<?php

namespace Modules\Hadith\Services;

use Modules\Hadith\Models\Kitab;

class KitabOptions
{
    public static function get(): array
    {
        return Kitab::orderBy('name')
            ->get()
            ->map(fn ($kitab) => [
                'value' => $kitab->id,
                'label' => $kitab->name,
            ])
            ->all();
    }

    public static function getValues(): array
    {
        // Return only the values for use in other contexts
        return array_map(fn ($item) => $item['value'], self::get());
    }
}
