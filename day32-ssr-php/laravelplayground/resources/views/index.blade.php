@extends('layout')

@section('content')

<h1>This is the homepage</h1>

@if ($apps->count())

    <ul>
        @foreach ($apps as $app)

        <li>
            {{ $app->title }}
            <br>
            Category: {{ $app->category->name }}
        </li>


        @endforeach 

    </ul>
    
@endif

@endsection