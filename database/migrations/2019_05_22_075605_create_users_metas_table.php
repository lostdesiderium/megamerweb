<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersMetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_metas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id')->unique();
            $table->string('user_nickname')->nullable();
            $table->string('user_country')->nullable();
            $table->string('user_language')->nullable();

            $table->string('pubg_in_game_name')->nullable();
            $table->mediumText('pubg_info_for_friend_request')->nullable();
            $table->string('solo_avg_dmg')->nullable();
            $table->string('duo_avg_dmg')->nullable();
            $table->string('squad_avg_dmg')->nullable();

            $table->string('csgo_in_game_name')->nullable();
            $table->mediumText('csgo_info_for_friend_request')->nullable();
            $table->string('mm_rank')->nullable();
            $table->string('faceit_rank')->nullable();

            $table->string('apex_legends_in_game_name')->nullable();
            $table->mediumText('apex_legends_info_for_friend_request')->nullable();
            $table->string('apex_legends_level')->nullable();

            $table->string('smite_in_game_name')->nullable();
            $table->mediumText('smite_info_for_friend_request')->nullable();
            $table->string('smite_season_rank')->nullable();

            $table->string('hearthstone_in_game_name')->nullable();
            $table->mediumText('hearthstone_info_for_friend_request')->nullable();
            $table->string('hearthstone_highest_rank')->nullable();

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
        Schema::dropIfExists('users_metas');
    }
}
