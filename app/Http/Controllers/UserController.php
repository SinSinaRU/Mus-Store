<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UsersData;
use App\Models\Order;

class UserController extends Controller
{
    public function userProfile($id)
    {
        if (UsersData::where('user_id', $id)->exists())
            $userData = UsersData::where('user_id', $id)->first();
        else {
            $userData = new UsersData();
            $userData->first_name = '';
            $userData->last_name = '';
            $userData->second_name = '';
            $userData->phone = '';
            $userData->address = '';
            $userData->zip_code = '';
        }
        $orderData = Order::where('user_id', $id)->get();
        return [$userData, $orderData];

    }

    public function changeUserData($id, Request $req)
    {
        $user = User::where('id', $id)->first();
        if (UsersData::where('user_id', $id)->exists())
            $userData = UsersData::where('user_id', $id)->first();
        else {
            $userData = new UsersData;
            $userData->user_id = $id;
        }

        $userData->first_name = $req->userdata['first_name'];

        $userData->last_name = $req->userdata['last_name'];
        $userData->second_name = $req->userdata['second_name'];
        $userData->phone = $req->userdata['phone'];
        $userData->address = $req->userdata['address'];
        $userData->zip_code = $req->userdata['zip_code'];
        $user->email = $req->email;

        $userData->save();
        $user->save();
        return 'Данные успешно изменены';
    }

    public function changePassword($id, Request $req)
    {
        $user = User::where('id', $id)->first();
        if (md5($req->current_password) === $user->password) {
            $user->password = md5($req->new_password);
            $user->save();
            return 'Пароль изменён';
        } else return 'Неправильно введён текущий пароль';
    }

    public function register(Request $req)
    {
        if (User::where('email', '=', $req->email)->exists()) {
            return response([
                'error' => 'Пользователь с такой почтой уже существует'
            ], 422);
        };
        $user = new User;
        $user->username = $req->username;
        $user->email = $req->email;
        $user->password = md5($req->password);
        $user->save();
        return 'Успешная регистрация';
    }

    public function login(Request $req)
    {
        if (!User::where('email', $req->email)->exists()) {
            return response([
                'error' => 'Пользователя с такой почтой не существует'
            ], 422);
        }
        $user = User::where('email', $req->email)->first();
        if (md5($req->password) === $user->password)
            return $user;

        return response([
            'error' => 'Неправильно введёна почта или пароль'
        ], 422);
    }

    public function getDataForCart($idUser)
    {
        $userData = UsersData::where('user_id', $idUser)->first();
        return $userData;
    }
}
