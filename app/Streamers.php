<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Streamers extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'belongs_to_game',
        'streamer_name',
        'youtube_link',
        'twitch_link',
        'about_streamer',
        'twitch_player_url',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];


}
