<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'title_en' => 'Early Detection: The Key to Surviving Cancer',
                'title_bn' => 'ক্যান্সার জয়ে প্রাথমিক সনাক্তকরণের গুরুত্ব',
                'content_en' => 'Recent studies show that early detection increases survival rates by up to 80%. Learn about the warning signs and screening methods available.',
                'content_bn' => 'সাম্প্রতিক গবেষণায় দেখা গেছে যে প্রাথমিক সনাক্তকরণে বেঁচে থাকার হার ৮০% পর্যন্ত বৃদ্ধি পায়। সতর্কতা লক্ষণ এবং স্ক্রিনিং পদ্ধতি সম্পর্কে জানুন।',
                'author' => 'Dr. Ayesha Rahman',
                'image' => 'storage/blogs/blog1.jpg',
                'is_published' => true,
                'views' => 1205,
            ],
            [
                'title_en' => 'Nutrition Tips for Chemotherapy Patients',
                'title_bn' => 'কেমোথেরাপি রোগীদের জন্য পুষ্টি পরামর্শ',
                'content_en' => 'Maintaining a balanced diet is crucial during chemotherapy. Here are the top 10 foods recommended by oncologists.',
                'content_bn' => 'কেমোথেরাপির সময় সুষম খাদ্য বজায় রাখা অত্যন্ত গুরুত্বপূর্ণ। এখানে অনকোলজিস্টদের দ্বারা সুপারিশকৃত সেরা ১০টি খাবার রয়েছে।',
                'author' => 'Nutritionist Karim',
                'image' => 'storage/blogs/blog2.jpg',
                'is_published' => true,
                'views' => 890,
            ],
            [
                'title_en' => 'BANCAT Launches New Rural Outreach Program',
                'title_bn' => 'ব্যানক্যাট নতুন গ্রামীণ আউটরিচ প্রোগ্রাম চালু করেছে',
                'content_en' => 'We are proud to announce our new initiative to bring cancer care to remote villages in Bangladesh.',
                'content_bn' => 'আমরা বাংলাদেশের প্রত্যন্ত গ্রামে ক্যান্সার সেবা পৌঁছে দেওয়ার জন্য আমাদের নতুন উদ্যোগ ঘোষণা করতে পেরে গর্বিত।',
                'author' => 'BANCAT Team',
                'image' => 'storage/blogs/blog3.jpg',
                'is_published' => true,
                'views' => 450,
            ],
            [
                'title_en' => 'Understanding Childhood Leukemia',
                'title_bn' => 'শৈশবকালীন লিউকেমিয়া বোঝা',
                'content_en' => 'Leukemia is the most common cancer in children. This guide explains the types, symptoms, and treatments.',
                'content_bn' => 'লিউকেমিয়া শিশুদের মধ্যে সবচেয়ে সাধারণ ক্যান্সার। এই নির্দেশিকাটি প্রকার, লক্ষণ এবং চিকিত্সা ব্যাখ্যা করে।',
                'author' => 'Dr. S. K. Das',
                'image' => 'storage/blogs/blog4.jpg',
                'is_published' => false, // Draft
                'views' => 10,
            ],
             [
                'title_en' => 'Volunteer Spotlight: Sarahs Journey',
                'title_bn' => 'স্বেচ্ছাসেবী স্পটলাইট: সারার যাত্রা',
                'content_en' => 'Meet Sarah, who has dedicated 5 years to supporting cancer patients at BANCAT.',
                'content_bn' => 'সারার সাথে পরিচিত হন, যিনি ব্যানক্যাটে ক্যান্সার রোগীদের সহায়তা করার জন্য ৫ বছর উৎসর্গ করেছেন।',
                'author' => 'BANCAT Admin',
                'image' => 'storage/blogs/blog5.jpg',
                'is_published' => true,
                'views' => 1500,
            ],
        ];

        foreach ($blogs as $blog) {
            $slug = Str::slug($blog['title_en']);
            DB::table('blogs')->updateOrInsert(
                ['slug' => $slug],
                [
                    'title_en' => $blog['title_en'],
                    'title_bn' => $blog['title_bn'],
                    'content_en' => $blog['content_en'],
                    'content_bn' => $blog['content_bn'],
                    'author' => $blog['author'],
                    'image' => $blog['image'],
                    'is_published' => $blog['is_published'],
                    'views' => $blog['views'],
                    'published_at' => $blog['is_published'] ? Carbon::now() : null,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]
            );
        }
    }
}
