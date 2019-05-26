<?php

namespace App\Http\Controllers;

use App\UsersMeta;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Resources\UsersMeta as UsersMetaResource;


class UsersMetaController extends Controller
{
    /**
     * Display a listing of the resource.
     * SHOW ALL USERS META
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_users_meta = UsersMeta::all();

        $response = ['success' =>'true', 'data'=>$all_users_meta];

        return json_encode($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * If record exists retrieve it and update it
     * else create a new record and save it
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $users_meta = new UsersMeta;

        $user_id = $request->user_id;
        if($user_id == null){
            return;
        }
        if(UsersMeta::where('user_id', $user_id)->first()){
            $users_meta = UsersMeta::where('user_id', $user_id)->first();
        }
        else{
            $users_meta = new UsersMeta;
        }

        $users_meta->user_id = $user_id;
        if(strlen($request->user_nickname) > 0){
            $users_meta->user_nickname = $request->user_nickname;
        }
        if(strlen($request->user_country) > 0){
            $users_meta->user_country = $request->user_country;
        }
        if(strlen($request->user_language) > 0){
            $users_meta->user_language = $request->user_language;
        }
        if(strlen($request->pubg_in_game_name) > 0){
            $users_meta->pubg_in_game_name = $request->pubg_in_game_name;
        }
        if(strlen($request->pubg_info_for_friend_request) > 0){
            $users_meta->pubg_info_for_friend_request = $request->pubg_info_for_friend_request;
        }
        if(strlen($request->solo_avg_dmg) > 0){
            $users_meta->solo_avg_dmg = $request->solo_avg_dmg;
        }
        if(strlen($request->duo_avg_dmg) > 0){
            $users_meta->duo_avg_dmg = $request->duo_avg_dmg;
        }
        if(strlen($request->squad_avg_dmg) > 0){
            $users_meta->squad_avg_dmg = $request->squad_avg_dmg;
        }
        if(strlen($request->csgo_in_game_name) > 0){
            $users_meta->csgo_in_game_name = $request->csgo_in_game_name;
        }
        if(strlen($request->csgo_info_for_friend_request) > 0){
            $users_meta->csgo_info_for_friend_request = $request->csgo_info_for_friend_request;
        }
        if(strlen($request->mm_rank) > 0){
            $users_meta->mm_rank = $request->mm_rank;
        }
        if(strlen($request->faceit_rank) > 0){
            $users_meta->faceit_rank = $request->faceit_rank;
        }
        if(strlen($request->apex_legends_in_game_name) > 0){
            $users_meta->apex_legends_in_game_name = $request->apex_legends_in_game_name;
        }
        if(strlen($request->apex_legends_info_for_friend_request) > 0){
            $users_meta->apex_legends_info_for_friend_request = $request->apex_legends_info_for_friend_request;
        }
        if(strlen($request->apex_legends_level) > 0){
            $users_meta->apex_legends_level = $request->apex_legends_level;
        }
        if(strlen($request->smite_in_game_name) > 0){
            $users_meta->smite_in_game_name = $request->smite_in_game_name;
        }
        if(strlen($request->smite_info_for_friend_request) > 0){
            $users_meta->smite_info_for_friend_request = $request->smite_info_for_friend_request;
        }
        if(strlen($request->smite_season_rank) > 0){
            $users_meta->smite_season_rank = $request->smite_season_rank;
        }
        if(strlen($request->hearthstone_in_game_name) > 0){
            $users_meta->hearthstone_in_game_name = $request->hearthstone_in_game_name;
        }
        if(strlen($request->hearthstone_info_for_friend_request) > 0){
            $users_meta->hearthstone_info_for_friend_request = $request->hearthstone_info_for_friend_request;
        }
        if(strlen($request->hearthstone_highest_rank) > 0){
            $users_meta->hearthstone_highest_rank = $request->hearthstone_highest_rank;
        }

        $users_meta->save();

        $response = ['success'=>true];

        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UsersMeta  $usersMeta
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userMeta = UsersMeta::where('user_id', $id)->first();

        $response = ['success'=>true, 'data'=>$userMeta ];

        return response()->json($response, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UsersMeta  $usersMeta
     * @return \Illuminate\Http\Response
     */
    public function edit(UsersMeta $usersMeta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UsersMeta  $usersMeta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UsersMeta $usersMeta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UsersMeta  $usersMeta
     * @return \Illuminate\Http\Response
     */
    public function destroy(UsersMeta $usersMeta)
    {
        //
    }
}
