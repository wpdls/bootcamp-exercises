<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\App;

class StoreController extends Controller
{
    public function index(){

        $apps = App::select()
            ->with('category')
            ->with('genres')
            ->orderBy('title', 'asc')
            ->limit(100)
            ->get();


        $index_view = view('index', compact('apps'));

// compact('apps') ===== [ 'apps' => $apps ] ---it creates an array of the variable $apps

        return $index_view;
    }
}
