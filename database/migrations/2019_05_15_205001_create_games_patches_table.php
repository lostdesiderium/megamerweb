<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesPatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games_patches', function (Blueprint $table) {
            $table->increments('id');
            $table->string('game_name');
            $table->string('patch_name')->nullable();
            $table->mediumText('patch_content');
            $table->string('resources_link')->nullable();
            $table->dateTime('pusblished_date')->nullable();
            $table->dateTime('release_date')->nullable();
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
        Schema::dropIfExists('games_patches');
    }
}
