<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//----------- USERS APIs ---------------


Route::group(['middleware' => ['jwt.auth','api-header']], function () {

    // all routes to protected resources are registered here
    Route::get('users/list', function(){
        $users = App\User::all();

        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });

    // List all users
    Route::get('users/getAllUsers', 'UserController@index');

    // Get one specified user
    Route::get('users/getUser/{id}', 'UserController@show');

    // Create new user
    Route::post('users/createUser', 'UserController@store');

    // Update user
    Route::put('users/updateUser', 'UserController@update');

    // Delete user
    Route::delete('users/removeUser', 'UserController@destroy');
});
Route::group(['users/middleware' => 'api-header'], function () {

    // The registration and login requests doesn't come with tokens
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
    Route::get('streamers/{game_name}', 'StreamersController@index');
});
//----------- USERS APIs END ---------------
