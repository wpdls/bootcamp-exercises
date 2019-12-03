<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class App extends Model
{
    public function genres() {
        return $this->belongsToMany('App\Genre');
    }

    public function category() {
        return $this->belongsTo('App\Category');
    }
}
