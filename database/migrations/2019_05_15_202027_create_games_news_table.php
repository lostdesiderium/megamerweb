<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games_news', function (Blueprint $table) {
            $table->increments('id');
            $table->string('game_name');
            $table->string('news_name')->nullable();
            $table->mediumText('news_content');
            $table->string('resources_link')->nullable();
            $table->dateTime('pusblished_date')->nullable();
            $table->string('event_start')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games_news');
    }
}
