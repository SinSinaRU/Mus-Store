<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\UsersData;
use App\Models\Order;

class ApplicationController extends Controller
{
    public function index()
    {
        return view('application');
    }

    public function search($data)
    {
        $products = Product::where('name', 'LIKE', '%' . $data . '%')->get();
        return $products;
    }

    public function sendOrder(Request $req)
    {
        $userData = UsersData::where('id', $req->user_data['id'])->first();
        $userData->order_amount = $userData->order_amount + $req->amount;
        $orderData = new Order;
        $orderData->user_id = $req->user_data['user_id'];
        $orderData->first_name_buyer = $req->user_data['first_name'];
        $orderData->last_name_buyer = $req->user_data['last_name'];
        $orderData->second_name_buyer = $req->user_data['second_name'];
        $orderData->phone_buyer = $req->user_data['phone'];
        $orderData->address_buyer = $req->user_data['address'];
        $orderData->email_buyer = $req->user['email'];
        $orderData->zip_code_buyer = $req->user_data['zip_code'];
        $orderData->payment_method = $req->payment['method'];
        if ($req->payment['method'] === 'Банковской картой') {
            $orderData->card_holder = $req->payment['card_holder'];
            $orderData->card_number = $req->payment['card_number'];
        }
        foreach ($req->products as $product) {
            $product = Product::where('id', $product['id'])->first();
            $product->is_available = $product->is_available - 1;
            $product->save();
        }
        $orderData->products = json_encode($req->products);
        $orderData->order_price = $req->amount;
        $userData->save();
        $orderData->save();
    }
}
