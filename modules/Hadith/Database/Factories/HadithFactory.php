<?php

namespace Modules\Hadith\Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Kitab;

class HadithFactory extends Factory
{
    protected $model = Hadith::class;

    public function definition(): array
    {
        $ar = 'حَدَّثَنَا مُوسَى بْنُ عَبْدِ الرَّحْمَنِ الْكِنْدِيُّ الْكُوفِيُّ، حَدَّثَنَا زَيْدُ بْنُ الْحُبَابِ، أَخْبَرَنَا مُعَاوِيَةُ بْنُ صَالِحٍ، حَدَّثَنِي سُلَيْمُ بْنُ عَامِرٍ، قَالَ سَمِعْتُ أَبَا أُمَامَةَ، يَقُولُ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَخْطُبُ فِي حَجَّةِ الْوَدَاعِ فَقَالَ" اتَّقُوا اللَّهَ رَبَّكُمْ وَصَلُّوا خَمْسَكُمْ وَصُومُوا شَهْرَكُمْ وَأَدُّوا زَكَاةَ أَمْوَالِكُمْ وَأَطِيعُوا ذَا أَمْرِكُمْ تَدْخُلُوا جَنَّةَ رَبِّكُمْ ". قَالَ فَقُلْتُ لأَبِي أُمَامَةَ مُنْذُ كَمْ سَمِعْتَ مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم هَذَا الْحَدِيثَ قَالَ سَمِعْتُهُ وَأَنَا ابْنُ ثَلاَثِينَ سَنَةً . قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ .';
        $bn = "আবূ উমামা (রাঃ) হতে বর্ণিত: আমি রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)কে বিদায় হাজ্জের ভাষণে বলতে শুনেছি, তিনি বলেছেনঃ তোমাদের প্রতিপালক আল্লাহ তা’আলাকে ভয় কর, তোমাদের পাঁচ ওয়াক্ত নামায আদায় কর। তোমাদের রামাযান মাসের রোজারাখ, তোমাদের ধন-দৌলতের যাকাত আদায় কর এবং তোমাদের আমীরের অনুসরণ কর, তবেই তোমাদের রবের জান্নাতে প্রবেশ করতে পারবে। আমি (সুলাইম) আবূ উমামা (রাঃ) -কে প্রশ্ন করলাম, আপনি কতদিন পূর্বে রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-এর নিকট এ হাদীস শুনেছেন? তিনি বলেনঃ আমি তিরিশ বছর বয়সে তাঁর নিকট এ হাদীস শুনেছি।";

        return [
            'kitab_id' => Kitab::inRandomOrder()->first()->id,
            'chapter_id' => Chapter::inRandomOrder()->first()->id,
            'hadith_no' => $this->faker->numberBetween(1, 1000),

            // Generate proper sentences in different languages
            'ar' => $ar,
            'bn' =>  $bn,
            'en' =>  $this->faker->sentence(100), // English sentenc

            'active' => $this->faker->boolean(true),
            'view_count' => $this->faker->numberBetween(1, 1000),

            'created_by' => User::inRandomOrder()->first()->id ?? null,
            'updated_by' => User::inRandomOrder()->first()->id ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
