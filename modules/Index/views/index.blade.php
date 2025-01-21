@extends('site-layout')

@section('meta-title', 'Daily Talim')

@section('meta-description', 'Your amazing site')

@section('bodyEndScripts')
    @vite('resources-site/js/index-app.js')
@endsection

@section('content')
    <section class="py-10 md:py-12">
        <div class="container mx-auto max-w-screen-xl px-4">
            <hadith-card :hadith="{{ json_encode($hadith) }}"></hadith-card>
        </div>
    </section>
@endsection
