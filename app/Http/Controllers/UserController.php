<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
            // get one user
            $user = User::findOrFail($id);

            //return user as a resource
            return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Check if user is valid
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    private function getToken($emailOrUsername, $password)
    {
        $token = null;
        $email = '';
        $username = '';
        if( strpos($emailOrUsername, '@') !== false ){
            $email = $emailOrUsername;
            //$credentials = $request->only('email', 'password');
            try {
                if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                    return response()->json([
                        'response' => 'error',
                        'message' => 'Password or username/email is invalid',
                        'token'=>$token
                    ]);
                }
            } catch (JWTAuthException $e) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Token creation failed',
                ]);
            }
            return $token;
        }
        else{
            $username = $emailOrUsername;
            //$credentials = $request->only('email', 'password');
            try {
                if (!$token = JWTAuth::attempt( ['username'=>$username, 'password'=>$password])) {
                    return response()->json([
                        'response' => 'error',
                        'message' => 'Password or username/email is invalid',
                        'token'=>$token
                    ]);
                }
            } catch (JWTAuthException $e) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Token creation failed',
                ]);
            }
            return $token;
        }

    }

    public function login(Request $request)
    {
        if( strpos($request->emailOrUsername, '@') !== false ){
            $user = User::where('email', $request->emailOrUsername)->get()->first();
            if ($user && Hash::check($request->password, $user->password)) // The passwords match...
            {
                $token = self::getToken($request->emailOrUsername, $request->password);
                $user->auth_token = $token;
                $user->save();
                $response = ['success'=>true, 'data'=>['id'=>$user->id,'username'=>$user->username, 'auth_token'=>$user->auth_token,'email'=>$user->email]];
            }
            else
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];

            return response()->json($response, 201);
        }
        else{
            $user = User::where('username', $request->emailOrUsername)->get()->first();
            if ($user && Hash::check($request->password, $user->password)) // The passwords match...
            {
                $token = self::getToken($request->emailOrUsername, $request->password);
                $user->auth_token = $token;
                $user->save();
                $response = ['success'=>true, 'data'=>['id'=>$user->id, 'email'=>$user->email, 'auth_token'=>$user->auth_token,'username'=>$user->username]];
            }
            else
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];

            return response()->json($response, 201);
        }


    }

    public function register(Request $request)
    {
        $payload = [
            'password'=>Hash::make($request->password),
            'username'=>$request->username,
            'email'=>$request->email,
            'auth_token'=> ''
        ];

        $user = new User($payload);
        if ($user->save())
        {

            $token = self::getToken($request->email, $request->password); // generate user token

            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);

            $user = User::where('email', $request->email)->get()->first();

            $user->auth_token = $token; // update user token

            $user->save();

            $response = ['success'=>true, 'data'=>['id'=>$user->id,'email'=>$request->email,'username'=>$request->username,'auth_token'=>$token]];
        }
        else
            $response = ['success'=>false, 'data'=>'Something went wrong, please try again'];


        return response()->json($response, 201);
    }


}
