<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getTypes($product)
    {
        $Products = new Product;
        $Product_info = $Products->where('name', $product)->first();
        $Category = new Category;
        $categoryData = $Category->where('id', $Product_info->id_category)->first();
        foreach ($Category->types as $key => $data)
            if ($key === $categoryData->name)
                $types = $data;
        return $types;
    }
}
