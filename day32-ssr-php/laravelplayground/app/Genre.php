<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    public function apps() {
        return $this->belongsToMany('App\App');
    }

    // public function categories() {
    //     return $this->belongsTo('App\Category');
    // }
    
}
