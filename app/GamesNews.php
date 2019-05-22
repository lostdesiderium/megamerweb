<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GamesNews extends Model
{
    protected $table = "games_news";

    protected $fillable = [
        'game_name',
        'news_name',
        'news_content',
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
