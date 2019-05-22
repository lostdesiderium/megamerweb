<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GamesPatches extends Model
{
    protected $table = "games_patches";

    protected $fillable = [
        'game_name',
        'patch_name',
        'patch_content',
        'resources_link',
        'pusblished_date',
        'release_date',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
