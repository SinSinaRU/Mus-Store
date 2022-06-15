<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use \App\Models\Specification;
use \App\Models\UsersData;
use \App\Models\Order;
use \App\Models\Review;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\ApplicationController;
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

// Запрос к катологу
Route::get('/category/{category}',[CategoryController::class,'index']);
// Запрос к каталогу по боковому меню
Route::post('/category/{category}', [CategoryController::class,'showBySubcategory']);
// Получение название категории
Route::get('/category/{category}/get-title', [CategoryController::class,'getTitleForSubcategory']);
// Получение брендов категории для бокового меню
Route::get('/category/{category}/get-brands', [CategoryController::class,'getBrandsForSubcategory']);
// Получение типов для бокового меню
Route::get('/category/{category}/get-types', [CategoryController::class,'getTypesForSubcategory']);
// Запрос к странице товара
Route::get('/product/{product}',[ProductController::class,'index']);
// Получение отзывов для товара
Route::get('/product/{product}/get_reviews', [ProductController::class,'getReviews']);
// Проверка наличия товара у пользователя
Route::post('/product/{product}/check_for_review', [ProductController::class,'checkProductAtUserOrders']);
// Удаление отзывов
Route::delete('/delete_review/{id}', [ProductController::class,'deleteReview']);
// Отправление отзыва
Route::post('/product/{product}/send_review', [ProductController::class,'addReview']);
// Отрпавление данных о регистрации
Route::post('/register/send_data', [UserController::class,'register']);
// Авторизация
Route::post('/login', [UserController::class,'login']);
// Изменение пароля
Route::post('/profile/{id}/change_password', [UserController::class,'register']);
// Изменение данных пользователя
Route::post('/profile/{id}', [UserController::class,'changeUserData']);
// Получение данных пользователя
Route::get('/profile/{id}', [UserController::class,'userProfile']);
// Получение данных пользователя для корзины
Route::get('/shopping-cart/{idUser}', [UserController::class,'getDataForCart']);
// Изменение данных о товаре
Route::post('/edit-product/{product}', function ($product, Request $req) {
    $product_data = Product::where('name', $product)->first();
    $product_data->is_available = $req->count;
    $product_data->price = $req->price;
    $product_data->short_text = $req->short_text;
    $product_data->full_text = $req->full_text;
    $specs_data = Specification::where('id_product', $product_data->id)->first();
    $specs_data->brand = $req->brand;
    $specs_data->type = $req->type;
    $specs_data->first_spec = $req->first_spec;
    $specs_data->second_spec = $req->second_spec;
    $specs_data->third_spec = $req->third_spec;
    $specs_data->fourth_spec = $req->fourth_spec;
    $specs_data->fifth_spec = $req->fifth_spec;
    $specs_data->sixth_spec = $req->sixth_spec;
    $specs_data->seventh_spec = $req->seventh_spec;
    $specs_data->made_in = $req->made_in;
    if ($req->file('img') != null) {
        $fileName = $req->file('img')->getClientOriginalName();
        $destinationPath = public_path() . '/uploads/img';
        $req->file('img')->move($destinationPath, $fileName);
        $product_data->img_file = $fileName;
    }
    if ($req->file('audio') != null) {
        $fileName = $req->file('audio')->getClientOriginalName();
        $destinationPath = public_path() . '/uploads/audio';
        $req->file('audio')->move($destinationPath, $fileName);
        $product_data->sound_file = $fileName;
    }
    $specs_data->save();
    $product_data->save();
    return redirect('/admin/product/' . $product);
});
// Получение типов товара для изменения данных
Route::get('/admin/product/{product}/get-types', function ($product) {
    $Products = new Product;
    $Product_info = $Products->where('name', $product)->first();
    $Category = new Category;
    $categoryData = $Category->where('id', $Product_info->id_category)->first();
    foreach ($Category->types as $key => $data)
        if ($key === $categoryData->name)
            $types = $data;
    return $types;
});
// Получение брендов товара для изменения данных
Route::get('/admin/product/{product}/get-brands', function ($product) {
    $Products = new Product;
    $Product_info = $Products->where('name', $product)->first();
    $Category = new Category;
    $categoryData = $Category->where('id', $Product_info->id_category)->first();
    foreach ($Category->brands as $key => $data)
        if ($key === $categoryData->name)
            $brands = $data;
    return $brands;
});
// Получение информации о типах, брендах и спецификации товара для добавления
Route::get('/admin/category/{category}/add-product/get-info', function ($category) {
    $categories = new Category;
    $Specification = new Specification;
    $category_name = $categories->where('name', $category)->value('name_ru');
    foreach ($categories->brands as $key => $data)
        if ($key === $category)
            $brands = $data;
    foreach ($categories->types as $key => $data)
        if ($key === $category)
            $types = $data;
    foreach ($Specification->specs_name as $key => $data)
        if ($key === $category)
            $specs = $data;
    $returnData = [$category_name, $brands, $types, $specs];
    return $returnData;
});
// Добавление нового товара
Route::post('/admin/category/{category}/add-product', function ($category, Request $req) {
    $product_data = new Product();
    $Category = new Category;
    $categoryData = $Category->where('name', $category)->first();
    $product_data->name = $req->name;
    $product_data->id_category = $categoryData->id;
    $product_data->is_available = $req->count;
    $product_data->price = $req->price;
    $product_data->short_text = $req->short_text;
    $product_data->full_text = $req->full_text;
    $fileName = $req->file('img')->getClientOriginalName();
    $destinationPath = public_path() . '/uploads/img';
    $req->file('img')->move($destinationPath, $fileName);
    $product_data->img_file = $fileName;

    if ($req->file('audio') != null) {
        $fileName = $req->file('audio')->getClientOriginalName();
        $destinationPath = public_path() . '/uploads/audio';
        $req->file('audio')->move($destinationPath, $fileName);
        $product_data->sound_file = $fileName;
    }
    $product_data->save();
    $specs_data = new Specification();
    $specs_data->id_product = $product_data->id;
    $specs_data->brand = $req->brand;
    $specs_data->type = $req->type;
    $specs_data->first_spec = $req->first_spec;
    $specs_data->second_spec = $req->second_spec;
    $specs_data->third_spec = $req->third_spec;
    $specs_data->fourth_spec = $req->fourth_spec;
    $specs_data->fifth_spec = $req->fifth_spec;
    $specs_data->sixth_spec = $req->sixth_spec;
    $specs_data->seventh_spec = $req->seventh_spec;
    $specs_data->made_in = $req->made_in;

    $specs_data->save();

    return redirect('/admin/category/' . $category);
});
// Получение данных о пользователях
Route::get('/admin/profile-management', function () {
    $users = User::all();
    foreach ($users as $user) {
        $user->date = $user->created_at->format('d.m.Y');
        if ($user->isAdmin)
            $user->role = 'Администратор';
        else
            $user->role = 'Пользователь';
    }
    return $users;
});
// Получение данных о всех заказах
Route::get('/admin/order-management', function () {
    return Order::all();
});
// Получение данных об определенном заказе
Route::get('/admin/order-management/{id}', function ($id) {
    $orderData = Order::where('id', $id)->get();
    return $orderData;
});
// Изменение статуса заказа
Route::post('/admin/order-management/{id}', function (Request $req, $id) {
    $orderData = Order::where('id', $id)->first();
    $orderData->status = $req[0];
    $orderData->save();
});
// Получение данных об определенном пользователе
Route::get('/admin/profile-management/{id}', function ($id) {
    $user = User::where('id', $id)->first();
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
    return [$userData, $orderData, $user];
});
// Изменение роли пользователя
Route::post('/admin/profile-management/{id}', function (Request $req, $id) {
    $user = User::where('id', $id)->first();
    if ($req->isAdmin)
        $user->isAdmin = 1;
    else
        $user->isAdmin = 0;
    $user->save();

});
// Поиск
Route::get('/search/{data}', [ApplicationController::class, 'search']);
// Отправление заказа
Route::post('/cart', [ApplicationController::class, 'sendOrder']);
